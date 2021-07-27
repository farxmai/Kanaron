import styled from "@emotion/styled";
import { TextField, Box, Typography } from "@material-ui/core";
import { useState } from "react";

const getWidthByLength = (length) => {
  switch (length) {
    case 1:
      return 7;
    case 2:
      return 17;
    case 3:
      return 27;
    case 4:
      return 37;
    default:
      return 37;
  }
};

const InputWrapper = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const CustomNunInput = ({ label, length = 2, onChange, ...rest }) => {
  const [focus, setFocus] = useState(false);

  const getColor = (theme) =>
    focus ? theme.palette.secondary.main : theme.palette.grey[500];
  const handleChange = (e) => {
    const str = `${e.target.value}`;
    if (str.length <= length && +str >= 0) {
      onChange(+str);
    }
  };

  return (
    <InputWrapper sx={{ px: 1 }}>
      <Typography
        sx={{
          color: getColor,
          transition: "color 0.2s ease",
          maxWidth: "80%",
        }}
      >
        {label}
      </Typography>
      <TextField
        {...rest}
        sx={{ width: getWidthByLength(length), ...rest.sx }}
        onChange={handleChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        variant="standard"
        type="number"
      />
    </InputWrapper>
  );
};
