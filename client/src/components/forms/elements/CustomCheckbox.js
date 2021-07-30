import {
  FormControlLabel,
  FormLabel,
  FormGroup,
  Checkbox,
} from "@material-ui/core";

export const CustomCheckbox = ({ label, options = [], ...rest }) => {
  return (
    <FormGroup sx={{ px: 1 }} {...rest}>
      <FormLabel component="legend">{label}</FormLabel>
      {options.map((props, i) => (
        <FormControlLabel
          key={i}
          control={<Checkbox checked={props.value} />}
          {...props}
        />
      ))}
    </FormGroup>
  );
};
