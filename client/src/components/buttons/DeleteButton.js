import { IconButton, Typography, Button } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { useState } from "react";
import { CardBordered } from "../cards";
import { DeleteModal } from "../modals/DeleteModal";

export const DeleteButton = ({ onDelete }) => (
  <IconButton onClick={onDelete}>
    <Delete />
  </IconButton>
);

export const DeleteButtonLarge = ({ onDelete, loading }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <DeleteModal open={open} onClose={handleClose} onDelete={onDelete} />
      <CardBordered sx={{ p: 1 }}>
        <Button
          variant="outlined"
          color="error"
          fullWidth
          onClick={handleClickOpen}
          disabled={loading}
        >
          <Delete />
          <Typography sx={{ ml: 1 }}>Удалить</Typography>
        </Button>
      </CardBordered>
    </>
  );
};
