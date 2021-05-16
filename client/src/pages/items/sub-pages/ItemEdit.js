/* eslint-disable object-curly-newline */
import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Mutation } from "react-apollo";
import { useHistory } from "react-router";
import {
  attributesTranslate,
  weaponParamsTranslate,
  armorParamsTranslate,
  itemTypesTranslate,
  armorTypesTranslate,
} from "../../../components/translate/dictionary";
import {
  HeaderRow,
  InputRow,
  NumberRow,
  RadioGroupRow,
  TextAreaRow,
  ButtonRow,
  SubmitRow,
} from "../../../components/tables/FormRows";
import {
  UPDATE_ITEM_MUTATION,
  CREATE_ITEM_MUTATION,
} from "../../../qql/ItemParams";

const defAttributes = {
  Agility: 0,
  Charisma: 0,
  Constitution: 0,
  Intelligence: 0,
  Perception: 0,
  Spirit: 0,
  Strength: 0,
};

const defWeapon = {
  baseAttack: 0,
  critAttack: 0,
  critHit: 0,
  damageDice: 0,
  recharge: 0,
  specialData: "",
};

const defArmor = {
  baseDefense: 0,
  agilityCut: 0,
  type: "",
  specialData: "",
};

const ClassEdit = ({ data, setEdit }) => {
  const [name, setName] = useState(data?.name || "");
  const [type, setType] = useState(data?.type || "");
  const [imgLink, setImgLink] = useState(data?.imgLink || "");
  const [material, setMaterial] = useState(data?.material || "");
  const [cost, setCost] = useState(data?.cost || 0);
  const [effects, setEffects] = useState(data?.effects || "");
  const [description, setDescription] = useState(data?.description || "");
  const [withAttributes, setWithAttributes] = useState(false);
  const [attributes, setAttributes] = useState(
    data?.attributes || defAttributes
  );
  const [weapon, setWeapon] = useState(data?.weapon || defWeapon);
  const [armor, setArmor] = useState(data?.armor || defArmor);

  const history = useHistory();

  const setParam = (init, setValue, type, value) =>
    setValue({
      ...init,
      [type]: value,
    });

  const itemTypes = itemTypesTranslate.map((el) => ({
    value: el.eng,
    label: el.ru,
  }));
  const armorTypes = armorTypesTranslate.map((el) => ({
    value: el.eng,
    label: el.ru,
  }));

  const fields = [
    { label: "Название", component: InputRow, value: name, onChange: setName },
    {
      label: "Изображение",
      component: InputRow,
      value: imgLink,
      onChange: setImgLink,
    },
    {
      label: "Материал",
      component: InputRow,
      value: material,
      onChange: setMaterial,
    },
    {
      label: "Стоимость (ж.м)",
      component: NumberRow,
      value: cost,
      onChange: setCost,
    },
    {
      label: "Общее описание",
      component: TextAreaRow,
      value: description,
      onChange: setDescription,
    },
    {
      label: "Свойства предмета",
      component: TextAreaRow,
      value: effects,
      onChange: setEffects,
    },
    {
      label: "Тип предмета",
      component: RadioGroupRow,
      value: type,
      onChange: setType,
      array: itemTypes,
    },
  ];

  const weaponFields = weaponParamsTranslate.map((el) => ({
    label: el.ru,
    component: el.type === "textarea" ? TextAreaRow : NumberRow,
    value: weapon[el.eng],
    onChange: (val) => setParam(weapon, setWeapon, el.eng, val),
  }));

  const armorFields = armorParamsTranslate.map((el) => ({
    label: el.ru,
    component:
      el.type === "textarea"
        ? TextAreaRow
        : el.type === "input"
        ? RadioGroupRow
        : NumberRow,
    value: armor[el.eng],
    onChange: (val) => setParam(armor, setArmor, el.eng, val),
    array: el.type === "input" ? armorTypes : [],
  }));

  const attribFields = attributesTranslate.map((el) => ({
    label: el.ru,
    component: NumberRow,
    value: attributes[el.eng],
    onChange: (val) => setParam(attributes, setAttributes, el.eng, val),
  }));

  const prepareRequestData = (id) => ({
    id,
    name,
    type,
    imgLink,
    material,
    cost,
    effects,
    description,
    attributes,
    weapon,
    armor,
  });

  return (
    <Mutation
      mutation={data?.id ? UPDATE_ITEM_MUTATION : CREATE_ITEM_MUTATION}
      variables={prepareRequestData(data?.id)}
      onCompleted={(res) => history.push(`/items/${res.addItem.id}`)}
      onError={(err) => console.log(err)}
    >
      {(mutation) => (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            mutation();
          }}
        >
          <Table striped bordered hover variant="dark">
            <thead>
              {setEdit ? (
                <HeaderRow label="Редактирование" setEdit={setEdit} />
              ) : (
                <HeaderRow label="Создание" />
              )}
            </thead>
            <tbody>
              {fields.map(
                ({ label, component: Component, value, onChange, array }) => (
                  <Component
                    label={label}
                    onChange={onChange}
                    value={value}
                    array={array}
                  />
                )
              )}
              {type === "weapon" &&
                weaponFields.map(
                  ({ label, component: Component, value, onChange, array }) => (
                    <Component
                      label={label}
                      onChange={onChange}
                      value={value}
                      array={array}
                    />
                  )
                )}
              {type === "armor" &&
                armorFields.map(
                  ({ label, component: Component, value, onChange, array }) => (
                    <Component
                      label={label}
                      onChange={onChange}
                      value={value}
                      array={array}
                    />
                  )
                )}
              <ButtonRow
                open={withAttributes}
                onClick={() => setWithAttributes(!withAttributes)}
                label="Бонус атрибутов"
              />
              {withAttributes &&
                attribFields.map(
                  ({ label, component: Component, value, onChange, array }) => (
                    <Component
                      label={label}
                      onChange={onChange}
                      value={value}
                      array={array}
                    />
                  )
                )}
              <SubmitRow back={setEdit} />
            </tbody>
          </Table>
        </form>
      )}
    </Mutation>
  );
};

export default ClassEdit;
