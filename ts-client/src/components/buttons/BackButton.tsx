import { Button } from "@mui/material";
import { ArrowLeft } from "@mui/icons-material";
import { useNav } from "hooks/useNav";
import React from "react";

export interface BackButtonProps {}

const BackButton: React.FC<BackButtonProps> = ({}) => {
  const { goBack } = useNav();
  return (
    <Button
      onClick={goBack}
      variant="outlined"
      startIcon={<ArrowLeft />}
      sx={{ minWidth: 100 }}
    >
      Back
    </Button>
  );
};

export default BackButton;
