import styled from "@emotion/styled";
import { css, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import MaterialContainer from "@mui/material/Container";
import Paper from "@mui/material/Paper";

export const Container = styled(MaterialContainer)`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const FramesWrapper = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ButtonsWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 10px 5px;
`;

