import { Card } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const defaults = {
  title: "Удаление",
  text: "Вы уверены что хотите удалить этот элемент?",
  disagree: "Отмена",
  agree: "Подтвердить",
};

export const DeleteModal = ({ title, text, disagree, agree, open, onClose, onDelete }) => (
  <Dialog
    open={open}
    onClose={onClose}
    maxWidth={"md"}
    PaperComponent={(props) => <Card variant='bordered' {...props} />}
  >
    <DialogTitle>{title || defaults.title}</DialogTitle>
    <DialogContent>
      <DialogContentText>{text || defaults.text}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} sx={{ color: "gray" }}>
        {disagree || defaults.disagree}
      </Button>
      <Button onClick={onDelete} color='error'>
        {agree || defaults.agree}
      </Button>
    </DialogActions>
  </Dialog>
);
