import React from "react";
import { Table } from "react-bootstrap";
import { EditButton } from "../buttons/EditButton";
import {
  getItemTypesTranslate,
  weaponParamsTranslate,
  armorParamsTranslate,
} from "../translate/dictionary";

export const WeaponStats = ({ weapon }) => (
  <Table striped>
    <tbody>
      <tr>
        <td colSpan="2" align="center">
          Статы оружия
        </td>
      </tr>
      {weaponParamsTranslate.map((field) =>
        field.type === "number" ? (
          <tr>
            <td>{field.ru}</td>
            <td align="center">
              {field.placeholder}
              {weapon[field.eng]}
            </td>
          </tr>
        ) : (
          <>
            <tr>
              <td colSpan="2">{field.ru}</td>
            </tr>
            {weapon[field.eng] && (
              <tr>
                <td colSpan="2">{weapon[field.eng]}</td>
              </tr>
            )}
          </>
        )
      )}
    </tbody>
  </Table>
);

export const ArmorStats = ({ armor }) => (
  <Table striped>
    <tbody>
      <tr>
        <td colSpan="2" align="center">
          Статы Брони
        </td>
      </tr>
      {armorParamsTranslate.map((field) => (
        <>
          {field.type === "number" && (
            <tr>
              <td>{field.ru}</td>
              <td align="right">
                {field.placeholder}
                {armor[field.eng]}
              </td>
            </tr>
          )}
          {field.type === "input" && (
            <tr>
              <td>{field.ru}</td>
              <td align="right">
                {field.array.length
                  ? field.array.find((el) => el.eng === armor[field.eng]).ru
                  : armor[field.eng]}
              </td>
            </tr>
          )}
          {field.type === "textarea" && (
            <>
              <tr>
                <td colSpan="2">{field.ru}</td>
              </tr>
              {armor[field.eng] && (
                <tr>
                  <td colSpan="2">{armor[field.eng]}</td>
                </tr>
              )}
            </>
          )}
        </>
      ))}
    </tbody>
  </Table>
);

export const ItemMainInfo = ({ data, setEdit }) => {
  const fields = [
    { type: "oneRow", label: "Тип прeдмета", value: data.type },
    { type: "oneRow", label: "Базовая стоимость", value: data.cost },
    { type: "oneRow", label: "Базовый вес", value: data.weight },
    { type: "oneRow", label: "Бонус очков здоровья", value: data.hpBonus },
    { type: "oneRow", label: "Бонус очков маны", value: data.mpBonus },
    { type: "multiRow", label: "Описание", value: data.description },
    { type: "multiRow", label: "Свойства", value: data.effects },
    {
      type: "listRow",
      label: "Бонусные перки",
      value: data.perks.map((el) => el.title),
    },
    {
      type: "listRow",
      label: "Бонусные навыки",
      value: data.skills.map((el) => el.title),
    },
    {
      type: "listRow",
      label: "Бонусные заклинания",
      value: data.spells.map((el) => el.title),
    },
    {
      type: "listRow",
      label: "Бонусные атрибуты",
      value: data.attributes
        ? Object.keys(data.attributes).map(
            (el) => `${el}: ${data.attributes[el]}`
          )
        : null,
    },
  ];

  const getRowFromType = (type, label, value) => {
    switch (type) {
      case "oneRow":
        return (
          <tr>
            <td>
              <b>{label}</b>
            </td>
            <td align="right">{value}</td>
          </tr>
        );
      case "multiRow":
        return (
          <>
            <tr>
              <td colSpan="2">
                <b>{label}</b>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <i>{value}</i>
              </td>
            </tr>
          </>
        );
      case "listRow":
        return (
          value.length > 0 && (
            <>
              <tr>
                <td colSpan="2">
                  <b>{label}</b>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <i>
                    {value.map((el) => (
                      <>
                        - {el}
                        <br />
                      </>
                    ))}
                  </i>
                </td>
              </tr>
            </>
          )
        );
      default:
        return null;
    }
  };

  return (
    <Table striped>
      <tbody>
        <tr>
          <td colSpan="2" align="center">
            <div className="d-flex flex-row align-items-center justify-content-between">
              <h4>{data.title}</h4>
              <EditButton setEdit={setEdit} />
            </div>
          </td>
        </tr>
        {fields.map(({ type, label, value }) =>
          value ? getRowFromType(type, label, value) : null
        )}
      </tbody>
    </Table>
  );
};

export const ItemImage = ({ url }) => (
  <Table striped>
    <tbody className="w-25">
      <tr>
        <td align="center">
          <img
            style={{
              display: "inline-block",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
            src={url}
            alt=""
          />
        </td>
      </tr>
    </tbody>
  </Table>
);
