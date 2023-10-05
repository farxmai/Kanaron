import React from "react";
import styled from "@emotion/styled";
import { Checkbox, InputLabel, SxProps, Theme } from "@mui/material";
import { Row } from "components/boxes";

export interface CheckboxInputProps {
  label?: string;
  value?: boolean;
  onChange?: (v: boolean) => void;
  min?: number;
  max?: number;
  variant?: "standard" | "outlined";
  sx?: SxProps;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  label,
  value,
  onChange,
  variant = "standard",
  sx,
}) => {
  return (
    <InputWrapper
      onClick={() => onChange && onChange(!value)}
      variant={variant}
      sx={{ ...sx }}
    >
      <InputLabel>{label}</InputLabel>
      <Checkbox
        size="small"
        checked={value}
        onChange={(e) => onChange && onChange(e.target.checked)}
        inputProps={{ "aria-label": "controlled" }}
      />
    </InputWrapper>
  );
};

export default CheckboxInput;

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
