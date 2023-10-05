declare module "@mui/material/styles/createPalette" {
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
}

// SETUP COLORS

export const GREY = {
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};

export const PRIMARY = {
  lighter: GREY[600],
  light: GREY[700],
  main: GREY[800],
  dark: GREY[900],
  darker: GREY[900],
};
export const SECONDARY = {
  lighter: "#fbf2e1",
  light: "#fbf2e1",
  main: "#F5DEB3",
  dark: "#f0c97f",
  darker: "#f0c97f",
};
export const INFO = {
  lighter: "#D0F2FF",
  light: "#74CAFF",
  main: "#1890FF",
  dark: "#0C53B7",
  darker: "#04297A",
};
export const SUCCESS = {
  lighter: "#58cc6b",
  light: "#46a355",
  main: "#347a40",
  dark: "#23512a",
  darker: "#1a3d20",
};
export const WARNING = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main: "#FFC107",
  dark: "#B78103",
  darker: "#7A4F01",
};
export const ERROR = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
  darker: "#7A0C2E",
};

const palette = {
  common: { black: "#000", white: "#fff" },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: { ...GREY },
};

export default palette;
