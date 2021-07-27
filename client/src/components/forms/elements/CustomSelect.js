import { Autocomplete, Popper, Fade, Typography, Box } from "@material-ui/core";
import { Done } from "@material-ui/icons";
import { CustomInput } from "./CustomInput";

const PaperComponent = ({ children, ...rest }) => (
  <Popper {...rest} transition>
    {({ TransitionProps }) => (
      <Fade {...TransitionProps} timeout={350}>
        {children}
      </Fade>
    )}
  </Popper>
);

const OptionWrapper = (option, state) => (
  <Box {...option}>
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        color: (theme) =>
          option["aria-selected"] && theme.palette.secondary.main,
      }}
    >
      <Typography>{state.title}</Typography>
    </Box>
    {option["aria-selected"] && (
      <Done sx={{ color: (theme) => theme.palette.secondary.main }} />
    )}
  </Box>
);

export const CustomSelect = ({ options = [], ...props }) => {
  return (
    <Autocomplete
      fullWidth
      options={options}
      noOptionsText="No available"
      renderInput={(params) => <CustomInput {...params} />}
      PopperComponent={PaperComponent}
      renderOption={OptionWrapper}
      {...props}
    />
  );
};
