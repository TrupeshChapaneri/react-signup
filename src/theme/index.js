import { createTheme, colors } from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "Roboto", "Arial", "sans-serif"].join(","),
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: `30px !important`,
        },
        input: {
          padding: `10px 12px !important`,
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          borderRadius: `30px !important`,
          color: `#000 !important`,
        },
      },
    },
  },
  palette: {
    mode: "dark",
    background: {
      default: "#000",
      paper: colors.common.white,
    },
    primary: {
      contrastText: "#ffffff",
      main: "#00e958",
    },
    text: {
      primary: "#e3e1e1",
      secondary: "#000",
    },
  },
});

export { theme };
