import palette from "./palette";

export const typography = {
  fontFamily: [
    "Philosopher",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  h1: {
    fontSize: 32,
    color: "white",
    fontWeight: 600,
  },
  h2: {
    fontSize: 28,
    color: "white",
    fontWeight: 600,
  },
  h3: {
    fontSize: 24,
    color: "white",
    fontWeight: 600,
  },
  h4: {
    fontSize: 20,
    color: "white",
    fontWeight: 500,
  },
  h5: {
    fontSize: 18,
    color: palette.grey[500],
    fontWeight: 500,
  },
  body1: {
    fontSize: 16,
    color: "white",
  },
  body2: {
    fontSize: 12,
    color: "white",
  },
  caption: {
    fontSize: 10,
    color: palette.grey[600],
  },
};
