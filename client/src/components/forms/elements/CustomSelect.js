import { useState } from "react";
import { Autocomplete, Popper, Fade, Typography, Box, IconButton } from "@material-ui/core";
import { Add, Done } from "@material-ui/icons";
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
        color: (theme) => option["aria-selected"] && theme.palette.secondary.main,
      }}
    >
      <Typography>{state?.title}</Typography>
    </Box>
    {option["aria-selected"] && <Done sx={{ color: (theme) => theme.palette.secondary.main }} />}
  </Box>
);

export const CustomSelect = ({ options = [], onChange, label, onPlus, ...props }) => {
  const [query, setQuery] = useState("");
  const handleChange = (_, val) => {
    onChange(val);
  };
  return (
    <Box display='flex'>
      <Autocomplete
        fullWidth
        options={options}
        getOptionLabel={(option) => option?.title}
        getOptionSelected={(option, value) => option?.id === value?.id}
        onInputChange={(_, value) => setQuery(value)}
        inputValue={query}
        noOptionsText='No available'
        renderInput={(params) => <CustomInput {...params} label={label} />}
        PopperComponent={PaperComponent}
        renderOption={OptionWrapper}
        {...props}
        onChange={handleChange}
      />
      {onPlus && (
        <IconButton onClick={onPlus} sx={{ height: 50, m: "auto", ml: 1 }}>
          <Add />
        </IconButton>
      )}
    </Box>
  );
};
