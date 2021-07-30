import { darkScrollbar } from "@material-ui/core";

export const getOverrides = (theme) => ({
  MuiCssBaseline: {
    styleOverrides: {
      html: {
        body: {
          ...darkScrollbar({
            track: theme.palette.grey[800],
            thumb: theme.palette.grey[700],
            active: theme.palette.grey[900],
          }),
        },
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        border: 0,
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        boxShadow: theme.customShadows.z24,
      },
    },
    variants: [
      {
        props: { variant: "bordered" },
        style: {
          border: "1px solid",
          borderColor: theme.palette.secondary.main,
        },
      },
      {
        props: { variant: "translucent" },
        style: {
          background: theme.palette.background.neutral,
          padding: theme.spacing(2),
        },
      },
    ],
  },
  MuiAutocomplete: {
    styleOverrides: {
      paper: {
        boxShadow: theme.customShadows.z20,
      },
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: {
        "&.Mui-focused": {
          color: theme.palette.secondary.main,
        },
      },
    },
  },
  MuiFormGroup: {
    styleOverrides: {
      root: {
        flexDirection: "row",
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      input: {
        "&[type=number]": {
          padding: 0,
          "-moz-appearance": "textfield",
        },
        "&::-webkit-outer-spin-button": {
          "-webkit-appearance": "none",
          margin: 0,
        },
        "&::-webkit-inner-spin-button": {
          "-webkit-appearance": "none",
          margin: 0,
        },
      },
      label: {
        "&.Mui-focused": {
          color: theme.palette.secondary.main,
        },
      },
    },
  },
  MuiInput: {
    styleOverrides: {
      underline: {
        "&:before": {
          borderBottomColor: theme.palette.grey[500_56],
        },
        "&:after": {
          borderBottomColor: theme.palette.secondary.main,
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        "&.Mui-focused": {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.secondary.main,
          },
        },
      },
    },
  },
});
