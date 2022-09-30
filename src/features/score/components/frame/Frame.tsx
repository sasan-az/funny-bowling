import Box from "@mui/material/Box";
import { findShotsByFrameNumber } from "@score/helpers/shot";
import * as Styled from "./styles";
import { Shot } from "@score/types";
import { Grow } from "@mui/material";

type Props = {
  isActive: boolean;
  number: number;
  score?: number;
  shots: Shot[];
};

const Frame = (props: Props): JSX.Element => {
  const { isActive, number, score, shots } = props;
  return (
    <Styled.FramePaper active={String(isActive)}>
      <Box display={"flex"} flexDirection={"row"} flex={1}>
        {findShotsByFrameNumber(shots, number).map((shot, index) => (
          <Grow in={true} key={`frame-shot-${shot.score}-${index}`}>
            <Styled.Shot variant="h6">{shot.score}</Styled.Shot>
          </Grow>
        ))}
      </Box>
      <Styled.Score variant="h4">{score ?? "-"}</Styled.Score>
    </Styled.FramePaper>
  );
};

export default Frame;
