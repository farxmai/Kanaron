import { createTheme } from "@mui/material/styles";
import palette from "./palette";
import { typography } from "./typography";

const spacing = [
  0, 2, 4, 8, 12, 16, 20, 24, 32, 36, 48, 64, 80, 100, 120, 140, 160,
];

const breakpoints = {
  values: {
    xs: 390,
    sm: 540,
    md: 768,
    lg: 1200,
    xl: 1440,
  },
};

const textColors = {
  standard: "#667587",
  active: "#8f9caa",
};

const theme = createTheme({
  spacing: spacing,
  breakpoints: breakpoints,
  palette: palette,
  typography: typography,
  components: {
    MuiTable: {
      styleOverrides: {
        root: {
          borderColor: "#1b232d",
          borderStyle: "solid",
          borderWidth: 2,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#1b232d",
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          "tr:nth-child(even)": {
            backgroundColor: "#1b232d",
          },
          "tr:nth-child(odd)": {
            backgroundColor: palette.grey[900],
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: 0,
          color: palette.grey[200],
          fontSize: 16,
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          width: "95%",
          margin: "auto",
          marginBottom: spacing[8],
        },
        track: {
          background: palette.grey[600],
          "&.Mui-active": {
            background: palette.grey[500],
          },
        },
        thumb: {
          background: palette.grey[600],
          "&.Mui-active": {
            background: palette.grey[500],
          },
        },
        markLabel: {
          color: palette.grey[600],
          fontSize: 14,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: palette.grey[600],
          marginBottom: spacing[5],
          marginTop: spacing[5],
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: 16,
          color: palette.grey[600],
          "&.Mui-focused": {
            color: palette.grey[500],
          },
          "&.Mui-disabled": {
            color: palette.grey[600],
            opacity: "50%",
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: palette.primary.main,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: palette.primary.light,
          },
          "&:hover": {
            backgroundColor: palette.primary.dark,
          },
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        fullWidth: true,
        size: "small",
      },
      styleOverrides: {
        input: {
          "&.Mui-disabled": {
            color: palette.grey[500],
            "-webkit-text-fill-color": palette.grey[500],
            opacity: "50%",
          },
        },
        root: {
          color: palette.grey[600],
          minWidth: "100px",
          "& fieldset": {
            borderColor: palette.grey[600],
          },
          "&.Mui-focused": {
            color: palette.grey[500],
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: palette.grey[500],
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: palette.grey[500],
          },
          "&.Mui-focused label": {
            color: palette.grey[500],
          },
          "&.Mui-error fieldset": {
            borderColor: `${palette.error.main}`,
          },
          "&.Mui-disabled fieldset": {
            color: palette.grey[500],
            borderColor: `${palette.grey[500]} !important`,
          },
          "&.Mui-disabled": {
            color: palette.grey[500],
            "-webkit-text-fill-color": palette.grey[500],
            opacity: "50%",
          },
        },
      },
    },
    MuiInput: {
      defaultProps: {
        fullWidth: true,
        size: "small",
      },
      styleOverrides: {
        root: {
          color: palette.grey[500],
        },
        underline: {
          color: palette.grey[600],
          "&.Mui-focused": {
            color: palette.grey[500],
          },
          "&&:hover::before": {
            borderBottomWidth: 1,
            borderBottomColor: palette.grey[500],
          },
          ":before": {
            borderColor: palette.grey[600],
          },
          ":after": {
            borderBottomColor: palette.grey[500],
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: palette.grey[800],
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 0,
          color: palette.grey[800],
          "&.Mui-checked": {
            color: palette.grey[600],
          },
        },
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        disableCloseOnSelect: true,
        disablePortal: true,
        isOptionEqualToValue: (option, value) =>
          value.id === option.id || value.value === option.value,
        getOptionLabel: (option) =>
          option?.label || option?.title || option?.name,
      },
      styleOverrides: {
        popupIndicator: {
          color: palette.grey[600],
        },
        clearIndicator: {
          color: palette.grey[600],
        },
        tagSizeMedium: {
          backgroundColor: palette.grey[600],
          color: palette.grey[800],
        },
        tagSizeSmall: {
          backgroundColor: palette.grey[600],
          color: palette.grey[800],
        },
        noOptions: {
          color: palette.grey[100],
          opacity: 0.5,
        },
        option: {
          color: palette.grey[100],
          "&:hover": {
            backgroundColor: palette.grey[500] + " !important",
            '&[aria-selected="true"]': {
              backgroundColor: palette.grey[700] + " !important",
            },
          },
          '&[aria-selected="true"]': {
            backgroundColor: palette.grey[600] + " !important",
            color: palette.grey[800] + " !important",
            "&.Mui-focused": {
              backgroundColor: palette.grey[600] + " !important",
              color: palette.grey[100] + " !important",
            },
          },
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        fullWidth: true,
        size: "small",
      },
      styleOverrides: {
        iconOutlined: {
          color: palette.grey[600],
        },
        outlined: {
          minWidth: "100px",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        size: "small",
      },
      styleOverrides: {
        root: {
          "& input[type=number]": {
            "-moz-appearance": "textfield",
          },
          "& input[type=number]::-webkit-outer-spin-button": {
            "-webkit-appearance": "none",
            margin: 0,
          },
          "& input[type=number]::-webkit-inner-spin-button": {
            "-webkit-appearance": "none",
            margin: 0,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderColor: palette.grey[600],
          color: palette.grey[600],
          "&:disabled": {
            opacity: 0.5,
          },
          "&:hover": {
            borderColor: palette.grey[500],
            color: palette.grey[500],
          },
          "&:active": {
            borderColor: palette.grey[500],
            color: palette.grey[500],
          },
        },
      },
    },
  },
});

export default theme;
