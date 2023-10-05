import { Button } from "@mui/material";
import { ArrowLeft } from "@mui/icons-material";
import { useNav } from "hooks/useNav";
import React from "react";

export interface SaveButtonProps {
  title?: string;
  onSubmit?: () => void;
}

const SaveButton: React.FC<SaveButtonProps> = ({
  title = "Save",
  onSubmit,
}) => {
  return (
    <Button
      variant={"contained"}
      color="success"
      onClick={onSubmit}
      sx={{ minWidth: 100 }}
    >
      {title}
    </Button>
  );
};

export default SaveButton;
