import { Card, Divider, Typography } from "@material-ui/core";
import { attributesTranslate } from "../translate/dictionary";
import { CustomNunInput } from "./elements";

const AttributesForm = ({ attributes, setAttribute }) => {
  const rows = attributesTranslate;
  return (
    <Card sx={{ p: 1 }} variant="bordered">
      <Typography variant="h5" gutterBottom>
        Атрибуты
      </Typography>
      <Divider />
      {rows.map((row) => (
        <CustomNunInput
          label={row.ru}
          value={attributes[row.eng]}
          onChange={(val) => setAttribute(row.eng, val)}
          sx={{ pb: 1 }}
        />
      ))}
    </Card>
  );
};

export default AttributesForm;
