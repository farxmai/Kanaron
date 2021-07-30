import { CardBordered } from "../cards";
import { attributesTranslate } from "../../translate/dictionary";
import { CustomNunInput } from "./elements";

export const AttributesForm = ({ attributes, setAttribute }) => {
  const rows = attributesTranslate;
  return (
    <CardBordered title='Атрибуты'>
      {rows.map((row) => (
        <CustomNunInput
          key={row.eng}
          label={row.ru}
          value={attributes ? attributes[row.eng] : 0}
          onChange={(val) => setAttribute(row.eng, val)}
        />
      ))}
    </CardBordered>
  );
};
