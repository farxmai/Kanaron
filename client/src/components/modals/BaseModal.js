import { useTheme } from "@emotion/react";
import { Card, IconButton, Typography, useMediaQuery } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Close } from "@material-ui/icons";
import { FlexBetween } from "components/directions";

const CloseButton = (props) => (
  <IconButton aria-label='close' onClick={props?.onClick}>
    <Close />
  </IconButton>
);

export const BaseModal = ({ open, onClose, title, children, actions }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      maxWidth={"md"}
      PaperComponent={(props) => <Card variant='bordered' {...props} />}
    >
      <DialogTitle>
        <FlexBetween>
          <Typography>{title}</Typography>
          <CloseButton onClick={onClose} />
        </FlexBetween>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      {actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  );
};
