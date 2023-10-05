import { Typography } from "@mui/material";
import { Row } from "components/boxes";
import BackButton from "components/buttons/BackButton";
import SaveButton from "components/buttons/SaveButton";

export const FormHeader = ({
  title,
  onSubmit,
}: {
  title: string;
  onSubmit?: () => void;
}) => (
  <Row>
    <Typography variant="h1">{title}</Typography>
    <Row sx={{ gap: 3 }}>
      <BackButton />
      {onSubmit && <SaveButton />}
    </Row>
  </Row>
);
