import { TextField } from "@material-ui/core";

export const CustomInput = (props) => {
  return <TextField fullWidth {...props} sx={{ my: 1, ...props.sx }} />;
};
