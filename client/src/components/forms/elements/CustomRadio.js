import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";

export const CustomRadio = ({ label, options = [], ...props }) => {
  return (
    <FormControl component="fieldset" sx={{ px: 1 }} {...props}>
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup>
        {options.map((props) => (
          <FormControlLabel control={<Radio />} {...props} />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
