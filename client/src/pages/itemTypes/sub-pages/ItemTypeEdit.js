import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router";
import { Grid } from "@material-ui/core";

import { getDefaultState } from "helpers/getDefaultState";
import { FormTitle } from "components/forms/elements";
import { DeleteButtonLarge, SaveButton } from "components/buttons";
import { DynamicForm } from "components/forms";
import { dices } from "constants/dices";

import {
  CREATE_ITEM_TYPE_MUTATION,
  DELETE_ITEM_TYPE_MUTATION,
  UPDATE_ITEM_TYPE_MUTATION,
} from "qql/ItemQuery";

import {
  getAccessorTypeArray,
  getAmmoEffectsArray,
  getArmorTypeArray,
  getConsumableTypeArray,
  getCritHitsFromInt,
  getItemTypeArray,
  getItemTypeLabel,
  getWeaponAttackArray,
  getWeaponDamageArray,
  getWeaponTypeArray,
} from "helpers/items";

const ItemTypeEdit = ({ item: data, setEdit }) => {
  const history = useHistory();
  const id = data?.id || null;
  const [values, setValues] = useState(getDefaultState("item", data));

  const [mutation, { loading, error }] = useMutation(
    id ? UPDATE_ITEM_TYPE_MUTATION : CREATE_ITEM_TYPE_MUTATION,
    {
      onCompleted: ({ addItem }) => (id ? setEdit() : history.push(`/item-types/${addItem.id}`)),
      onError: (err) => alert(err.message),
    }
  );

  const [remove, { loading: removing }] = useMutation(DELETE_ITEM_TYPE_MUTATION, {
    onCompleted: (res) => history.push(`/item-types`),
    onError: (err) => alert(err.message),
  });

  const setCurrentValue = (type, value) =>
    setValues({
      ...values,
      [type]: value,
    });

  const setTypeValue = (type, value) =>
    setValues({
      ...values,
      typeProperties: {
        ...values.typeProperties,
        [values.type]: {
          ...values.typeProperties[values.type],
          [type]: value,
        },
      },
    });

  const infoFields = [
    {
      type: "input",
      field: "title",
      label: "Название",
    },
    {
      type: "input",
      field: "imgLink",
      label: "Изображение",
    },
    {
      type: "text",
      field: "description",
      label: "Описание",
    },
    {
      type: "number",
      field: "weight",
      label: "Вес (г)",
      length: 6,
    },
    {
      type: "number",
      field: "cost",
      label: "Стоимость (жм)",
      length: 6,
    },
    {
      type: "radio",
      field: "type",
      label: "Тип предмета",
      options: getItemTypeArray(),
    },
  ];

  const typeFields = {
    armor: [
      {
        type: "number",
        field: "baseDefense",
        label: "Базовая Защита",
      },
      {
        type: "number",
        field: "quickSlots",
        label: "Доп. слоты",
      },
      {
        type: "radio",
        field: "type",
        label: "Тип снаряжения",
        options: getArmorTypeArray(),
      },
    ],
    weapon: [
      {
        type: "radio",
        field: "type",
        label: "Тип оружия",
        options: getWeaponTypeArray(),
      },
      {
        type: "multiselect",
        field: "attackType",
        label: "Тип атаки",
        options: getWeaponAttackArray(),
      },
      {
        type: "multiselect",
        field: "damageType",
        label: "Тип урона",
        options: getWeaponDamageArray(),
      },
      {
        type: "number",
        field: "baseAttack",
        label: "Базовая Атака",
        length: 2,
      },
      {
        type: "number",
        field: "attackRange",
        label: "Радиус Атаки (м)",
        length: 2,
      },
      {
        type: "number",
        field: "recharge",
        label: "Перезарядка (х)",
        length: 2,
      },
      {
        type: "number",
        field: "critAttack",
        label: "Множитель крита",
        length: 2,
      },
      {
        type: "number",
        field: "critHit",
        label: "Крит начиная с",
        length: 2,
      },
      {
        type: "radio",
        field: "dice",
        label: "Кубик Урона",
        options: dices,
      },
      {
        type: "number",
        field: "diceCount",
        label: "Кол-во кубиков",
      },
    ],
    accessor: [
      {
        type: "radio",
        field: "type",
        label: "Тип аксесуара",
        options: getAccessorTypeArray(),
      },
    ],
    consumable: [
      {
        type: "radio",
        field: "type",
        label: "Тип расходника",
        options: getConsumableTypeArray(),
      },
      {
        type: "text",
        field: "effect",
        label: "Дополнительный эффект",
      },
    ],
    ammo: [
      {
        type: "number",
        field: "baseAttack",
        label: "Базовая Атака",
        length: 2,
      },
      {
        type: "number",
        field: "attackRange",
        label: "Радиус Атаки (м)",
        length: 2,
      },
      {
        type: "number",
        field: "stackSize",
        label: "Стак",
        length: 3,
      },
      {
        type: "multiselect",
        field: "damageType",
        label: "Тип урона",
        options: getWeaponDamageArray(),
      },
      {
        type: "text",
        field: "effect",
        label: "Дополнительный эффект",
      },
      {
        type: "multiselect",
        field: "effectType",
        label: "Тип урона",
        options: getAmmoEffectsArray(),
      },
    ],
  };

  const requestData = {
    variables: {
      ...values,
      typeProperties: {
        ...values.typeProperties,
        weapon: {
          ...values.typeProperties.weapon,
          attackType: values.typeProperties.weapon.attackType.map((el) => el.id),
          damageType: values.typeProperties.weapon.damageType.map((el) => el.id),
          critHit: getCritHitsFromInt(values.typeProperties.weapon.critHit),
        },
        ammo: {
          ...values.typeProperties.ammo,
          effectType: values.typeProperties.ammo.effectType.map((el) => el.id),
          damageType: values.typeProperties.ammo.damageType.map((el) => el.id),
        },
      },
    },
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <FormTitle title={`${id ? "Редактирование" : "Создание"} Протоипа`} onEdit={setEdit} />
      </Grid>
      <Grid item xs={12} md={8}>
        <DynamicForm
          title='Базовая информация'
          fields={infoFields}
          values={values}
          setValues={setCurrentValue}
        />
        {values.type !== "other" && (
          <DynamicForm
            title={getItemTypeLabel(values.type)}
            fields={typeFields[values.type]}
            values={values.typeProperties[values.type]}
            setValues={setTypeValue}
          />
        )}
      </Grid>
      <Grid item xs={12} md={4}>
        {id && (
          <DeleteButtonLarge
            onDelete={() => remove({ variables: { id } })}
            loading={loading || removing}
          />
        )}
      </Grid>
      <Grid item xs={12}>
        <SaveButton
          onClick={() => mutation(requestData)}
          loading={loading || removing}
          error={error}
        />
      </Grid>
    </Grid>
  );
};

export default ItemTypeEdit;
