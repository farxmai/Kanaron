import React from "react";
import styled from "@emotion/styled";
import { InputLabel, SxProps, TextField, Theme } from "@mui/material";
import { Row } from "components/boxes";
import { useFocus } from "hooks/useFocus";

export interface NumberInputProps {
  label?: string;
  value?: string | number;
  onChange?: (v: string) => void;
  min?: number;
  max?: number;
  variant?: "standard" | "outlined";
  sx?: SxProps;
  fullWidth?: boolean;
  withPadding?: boolean;
}

const NumberInput: React.FC<NumberInputProps> = ({
  label,
  value,
  onChange,
  min = 0,
  max = 99,
  variant = "standard",
  fullWidth = false,
  withPadding = true,
  sx,
}) => {
  const [inputRef, setInputFocus] = useFocus();
  return (
    <InputWrapper
      // @ts-ignore
      onClick={() => setInputFocus()}
      variant={variant}
      sx={{ ...sx }}
    >
      {label && <InputLabel>{label}</InputLabel>}
      <TextField
        inputRef={inputRef}
        InputProps={{
          disableUnderline: variant === "outlined",
        }}
        inputProps={{
          inputMode: "numeric",
          style: { textAlign: "center" },
          min: 0,
          max: 999,
        }}
        sx={{
          maxWidth: fullWidth ? "100%" : 30,
          input: withPadding ? { padding: 0 } : {},
          ...sx,
        }}
        type="number"
        variant="standard"
        value={value}
        onChange={(e) => {
          const value = e.target.value;
          const reg = new RegExp(`^[0-9]{0,${String(max).length}}$`);
          if (onChange && reg.test(e.target.value)) {
            if (+value >= max) onChange(String(max));
            else if (+value <= min) onChange(String(min));
            else onChange(e.target.value);
          }
        }}
      />
    </InputWrapper>
  );
};

export default NumberInput;

const InputWrapper = styled(Row)(
  ({ theme, variant }: { theme?: Theme; variant: string }) => ({
    alignItems: "center",
    width: "100%",
    ...(variant === "outlined"
      ? {
          borderRadius: "4px",
          border: `1px solid ${theme?.palette.grey[600]}`,
          height: 40,
          paddingLeft: theme?.spacing(4),
          paddingRight: theme?.spacing(3),
          marginBottom: theme?.spacing(5),
          "&:hover": {
            borderColor: theme?.palette.grey[500],
          },
          "&:hover label": {
            color: theme?.palette.grey[500],
          },
        }
      : {}),
  })
);
