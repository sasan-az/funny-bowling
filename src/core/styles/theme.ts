import { createTheme } from "@mui/material/styles";
import { red, yellow } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    info: {
      main: yellow.A400,
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
