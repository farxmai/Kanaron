import { IconButton } from "@material-ui/core";
import { Edit } from "@material-ui/icons";

export const EditButton = ({ setEdit }) => (
  <IconButton onClick={setEdit}>
    <Edit />
  </IconButton>
);
