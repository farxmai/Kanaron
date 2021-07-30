import { Box, Typography } from "@material-ui/core";
import { DeleteButton, EditButton } from "components/buttons";
import { CardBordered } from "components/cards";
import { FlexBetween } from "components/directions";

export const FormTitle = ({ title, onEdit, onDelete }) => (
  <CardBordered sx={{ p: 1 }}>
    <FlexBetween>
      <Typography sx={{ fontSize: { xs: 24, sm: 30 } }}>{title}</Typography>
      <Box>
        {onEdit && <EditButton setEdit={onEdit} />}
        {onDelete && <DeleteButton onDelete={onDelete} />}
      </Box>
    </FlexBetween>
  </CardBordered>
);
