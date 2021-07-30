import { Button, Typography } from "@material-ui/core";
import { Save } from "@material-ui/icons";
import { CardBordered } from "../cards";

export const SaveButton = ({ onClick, loading, error }) => (
  <CardBordered sx={{ p: 1 }}>
    {error && (
      <Typography color="error" textAlign="center" sx={{ p: 1 }}>
        {error}
      </Typography>
    )}
    <Button
      variant="outlined"
      color="success"
      fullWidth
      onClick={onClick}
      disabled={loading || error}
    >
      <Save />
      <Typography sx={{ ml: 1 }}>Сохранить</Typography>
    </Button>
  </CardBordered>
);
