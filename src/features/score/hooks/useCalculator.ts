import { useCallback, useEffect, useMemo, useState } from "react";
import {
  frameCount,
  frameMaximumScore,
  lastFrame,
} from "@score/constants/frame";
import {
  calculateTotalScore,
  createFrames,
  findFrameByNumber,
  updateFrameByNumber,
} from "@score/helpers/frame";
import { Shot } from "@score/types";
import { findShotsByFrameNumber } from "@score/helpers/shot";

const defaultValues = {
  frames: createFrames(frameCount),
  currentFrame: 1,
  shots: [],
};

export default function useCalculator() {
  const [frames, setFrames] = useState(defaultValues.frames);

  const [currentFrame, setCurrentFrame] = useState(defaultValues.currentFrame);

  const [shots, setShots] = useState<Shot[]>(defaultValues.shots);

  const currentFrameShots = useMemo(
    () => findShotsByFrameNumber(shots, currentFrame),
    [shots, currentFrame]
  );

  const totalScore = useMemo(() => calculateTotalScore(frames), [frames]);

  const goToNextFrame = useCallback(
    () => setCurrentFrame((prevState) => prevState + 1),
    []
  );

  const calculateFrameScore = useCallback(() => {
    //update current frame score
    const frameShotsScore = currentFrameShots.reduce((a, b) => a + b.score, 0);

    setFrames((prvState) =>
      updateFrameByNumber(prvState, currentFrame, {
        number: currentFrame,
        [frameShotsScore < frameMaximumScore || currentFrame === frameCount
          ? "score"
          : "tempScore"]: frameShotsScore,
      })
    );

    const twoPreviousFrame = findFrameByNumber(frames, currentFrame - 2);

    const previousFrameShots = findShotsByFrameNumber(shots, currentFrame - 1);

    //check for two previous strike frame
    if (twoPreviousFrame?.tempScore) {
      setFrames((prvState) =>
        updateFrameByNumber(prvState, twoPreviousFrame.number, {
          number: twoPreviousFrame.number,
          score:
            (twoPreviousFrame?.tempScore ?? 0) +
            previousFrameShots.reduce((a, b) => a + b.score, 0) +
            currentFrameShots[0].score,
        })
      );
    }

    //skip score calculation
    if (
      currentFrameShots.some((item) => item.score === frameMaximumScore) &&
      currentFrame < lastFrame
    )
      return;

    //check for previous strike frame
    if (previousFrameShots.some((shot) => shot.score === frameMaximumScore)) {
      setFrames((prvState) =>
        updateFrameByNumber(prvState, currentFrame - 1, {
          number: currentFrame - 1,
          score:
            frameMaximumScore +
            currentFrameShots.slice(0, 2).reduce((a, b) => a + b.score, 0),
        })
      );
    }
    //check for previous spire frame
    else if (previousFrameShots.reduce((a, b) => a + b.score, 0) === 10) {
      setFrames((prvState) =>
        updateFrameByNumber(prvState, currentFrame - 1, {
          number: currentFrame - 1,
          score: frameMaximumScore + (currentFrameShots?.[0]?.score ?? 0),
        })
      );
    }
  }, [frames, shots, currentFrame, currentFrameShots]);

  const handleScoreClick = useCallback(
    (score: number) => {
      setShots((prevState) => [
        ...prevState,
        { score, frameNumber: currentFrame },
      ]);
    },
    [currentFrame]
  );

  const handleReset = useCallback(() => {
    setFrames(defaultValues.frames);
    setCurrentFrame(defaultValues.currentFrame);
    setShots(defaultValues.shots);
  }, []);

  //handle frame score calculation
  useEffect(() => {
    const isStrikeFrame = currentFrameShots.some(
      (shot) => shot.score === frameMaximumScore
    );

    const isSpireFrame =
      currentFrameShots.reduce((a, b) => a + b.score, 0) === frameMaximumScore;

    //check for last spire or strike fame
    if (
      (isStrikeFrame || isSpireFrame) &&
      currentFrame === lastFrame &&
      currentFrameShots?.length < 3
    )
      return;

    if (isStrikeFrame || currentFrameShots?.length >= 2) {
      calculateFrameScore();
      goToNextFrame();
    }
  }, [currentFrame, calculateFrameScore, goToNextFrame, currentFrameShots]);

  return {
    frames,
    shots,
    totalScore,
    currentFrame,
    handleScoreClick,
    handleReset,
  };
}
