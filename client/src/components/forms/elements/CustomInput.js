import { TextField } from "@material-ui/core";

export const CustomInput = ({ onChange, ...props }) => {
  return (
    <TextField
      fullWidth
      onChange={(e) => onChange(e.target.value)}
      {...props}
      sx={{ my: 1, ...props.sx }}
    />
  );
};
