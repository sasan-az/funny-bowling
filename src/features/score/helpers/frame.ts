import { Frame } from "@score/types";

export const createFrames = (count: number): Frame[] =>
  [...Array(count).keys()].map((i) => ({
    number: ++i,
  }));

export const calculateTotalScore = (frames: Frame[]) =>
  frames.reduce((a, b) => a + (b?.score ?? 0), 0);

export const findFrameByNumber = (frames: Frame[], frameNumber: number) =>
  frames.find((frame) => frame.number === frameNumber);

export const updateFrameByNumber = (
  frames: Frame[],
  frameNumber: number,
  updateFrame: Frame
) => {
  return frames.map((frame) =>
    frame.number === frameNumber ? updateFrame : frame
  );
};
