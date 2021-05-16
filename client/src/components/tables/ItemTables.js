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

export const ItemMainInfo = ({ data, setEdit }) => (
  <Table striped>
    <tbody>
      <tr>
        <td colSpan="2" align="center">
          <div className="d-flex flex-row align-items-center justify-content-between">
            <h4>{data.name}</h4>
            <EditButton setEdit={setEdit} />
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <b>Тип прeдмета</b>
        </td>
        <td align="right">{getItemTypesTranslate(data.type)}</td>
      </tr>
      <tr>
        <td>
          <b>Стоимость</b>
        </td>
        <td align="right">{data.cost} жм</td>
      </tr>
      <tr>
        <td>
          <b>Материал</b>
        </td>
        <td align="right">{data.material}</td>
      </tr>
      <tr>
        <td colSpan="2">
          <b>Описание</b>
        </td>
      </tr>
      <tr>
        <td colSpan="2">
          <i>{data.description}</i>
        </td>
      </tr>
      <tr>
        <td colSpan="2">
          <b>Свойства</b>
        </td>
      </tr>
      <tr>
        <td colSpan="2">
          <i>{data.effects}</i>
        </td>
      </tr>
    </tbody>
  </Table>
);

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
