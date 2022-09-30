import styled from "@emotion/styled";
import Paper from "@mui/material/Paper";
import { css, Typography } from "@mui/material";

export const FramePaper = styled(Paper)<{ active?: string }>`
  flex: 1;
  padding: 5px;
  display: flex;
  flex-direction: column;
  height: 120px;
  margin: 0 5px;
  ${({ active }) =>
      active &&
    css`
      border: 1px solid rgba(255, 255, 255, 0.5);
    `}
`;

export const Shot = styled(Typography)`
  background: #ffffff25;
  flex: 1;
  text-align: center;
  margin: 5px 5px;
  border-radius: 5px;
`;

export const Score = styled(Typography)`
  background: #ffffff25;
  flex: 1;
  text-align: center;
  margin: 5px 5px;
  border-radius: 5px;
`;
