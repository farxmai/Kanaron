import { CardBordered } from "../cards";
import {
  CustomCheckbox,
  CustomInput,
  CustomNunInput,
  CustomRadio,
  CustomSelect,
} from "./elements";

const getComponentByType = (key, props) => {
  switch (key) {
    case "input":
      return <CustomInput {...props} />;
    case "text":
      return <CustomInput multiline rows={3} {...props} />;
    case "number":
      return <CustomNunInput {...props} />;
    case "radio":
      return <CustomRadio {...props} />;
    case "checkbox":
      return <CustomCheckbox {...props} />;
    case "select":
      return <CustomSelect {...props} />;
    case "multiselect":
      return <CustomSelect multiple {...props} />;
    default:
      return null;
  }
};

export const DynamicForm = ({ title, fields, values, setValues }) => {
  return (
    <CardBordered title={title}>
      {fields.map(({ type, field, ...props }) =>
        getComponentByType(type, {
          ...props,
          value: values[field],
          onChange: (val) => setValues(field, val),
        })
      )}
    </CardBordered>
  );
};
