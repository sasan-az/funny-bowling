import useCalculator from "@score/hooks/useCalculator";
import { frameScores, lastFrame } from "@score/constants/frame";
import Frame from "@score/components/frame";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Grow from "@mui/material/Grow";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import * as Styled from "./styles";

export const ScoreCalculator = (): JSX.Element => {
  const {
    frames,
    shots,
    totalScore,
    currentFrame,
    handleScoreClick,
    handleReset,
  } = useCalculator();

  return (
    <Styled.Container>
      <Grow in={true}>
        <Styled.FramesWrapper>
          {frames.map((frame) => (
            <Frame
              key={frame.number}
              isActive={currentFrame === frame.number}
              score={frame?.score}
              number={frame.number}
              shots={shots}
            />
          ))}
        </Styled.FramesWrapper>
      </Grow>
      <Styled.ButtonsWrapper>
        {currentFrame <= lastFrame &&
          frameScores.map((score) => (
            <Button
              key={score}
              onClick={() => handleScoreClick(score)}
              color={"secondary"}
              sx={{ m: "5px" }}
              variant={"contained"}
            >
              {score}
            </Button>
          ))}
      </Styled.ButtonsWrapper>

      <Chip
        variant={"outlined"}
        color={"primary"}
        sx={{ fontSize: "20px", fontWeight: "bold", p: "5px", my: "5px" }}
        icon={<SportsScoreIcon />}
        label={`Total Score : ${totalScore}`}
      />

      {currentFrame > lastFrame && (
        <Button
          onClick={() => handleReset()}
          variant={"contained"}
          color={"info"}
          sx={{ mt: "15px" }}
        >
          Start Again
        </Button>
      )}
    </Styled.Container>
  );
};

export default ScoreCalculator;
