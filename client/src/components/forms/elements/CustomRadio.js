import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@material-ui/core";

export const CustomRadio = ({ label, options = [], value, onChange, ...rest }) => {
  const handleChange = (event) => {
    const value = !isNaN(+event.target.value) ? +event.target.value : event.target.value;
    onChange(value);
  };
  return (
    <FormControl component='fieldset' sx={{ px: 1 }} {...rest}>
      <FormLabel component='legend'>{label}</FormLabel>
      <RadioGroup value={value} onChange={handleChange}>
        {options.map((option, i) => (
          <FormControlLabel key={i} control={<Radio />} {...option} />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
