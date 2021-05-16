import React from "react";
import { Table } from "react-bootstrap";
import { attributesTranslate } from "../translate/dictionary";

export default function Attributes({
  attributes,
  selfAttributes,
  getAttribute,
  variant,
  isEdit,
  setValue,
  limit,
}) {
  const points =
    selfAttributes &&
    Object.values(selfAttributes).reduce((acc, value) => acc + value, 0);
  const isInLimit = points < limit;
  return (
    <Table striped hover variant={variant}>
      <tbody>
        <tr>
          <td colSpan="8" align="center">
            {`Атрибуты ${isEdit ? `${points}/${limit}` : ""}`}
          </td>
        </tr>
        {attributesTranslate.map((field) => (
          <tr>
            <td>{field.ru}</td>
            <td width={40} align="center">
              {getAttribute ? getAttribute(field.eng) : attributes[field.eng]}
            </td>
            {isEdit && (
              <td>
                <input
                  type="number"
                  m
                  max={isInLimit ? 20 : selfAttributes[field.eng]}
                  min={0}
                  style={{ height: "20px", width: "40px", textAlign: "right" }}
                  onChange={(e) => setValue(field.eng, +e.target.value)}
                  value={selfAttributes[field.eng]}
                />
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
