import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router";
import { Grid } from "@material-ui/core";

import { getDefaultState } from "helpers/getDefaultState";
import { FormTitle } from "components/forms/elements";
import QueryLayout from "components/layouts/QueryLayout";
import { DeleteButtonLarge, SaveButton } from "components/buttons";
import { AttributesForm, IconForm, DynamicForm } from "components/forms";

import {
  CREATE_ITEM_TYPE_MUTATION,
  DELETE_ITEM_TYPE_MUTATION,
  GET_ITEM_TYPE_QUERY,
  UPDATE_ITEM_TYPE_MUTATION,
} from "qql/ItemQuery";
import { GET_SELECTED_LISTS_QUERY } from "qql/GlobalQueries";
import { BaseModal } from "components/modals/BaseModal";
import { dices } from "constants/dices";
import {
  getAccessorTypeArray,
  getAmmoEffectsArray,
  getArmorTypeArray,
  getConsumableTypeArray,
  getItemTypeArray,
  getItemTypeLabel,
  getWeaponAttackArray,
  getWeaponDamageArray,
  getWeaponTypeArray,
} from "helpers/items";

const ItemTypeEdit = ({
  item: data,
  skills: skillsList,
  spells: spellsList,
  perks: perksList,
  setEdit,
}) => {
  const history = useHistory();
  const id = data?.id || null;
  const [values, setValues] = useState(data || getDefaultState("item"));
  // const [typeValues, setTypeValues] = useState(data. || getDefaultState("item"));

  const [mutation, { loading, error }] = useMutation(
    id ? UPDATE_ITEM_TYPE_MUTATION : CREATE_ITEM_TYPE_MUTATION,
    {
      // onCompleted: (res) => (id ? setEdit() : history.push(`/items/${res.addItem.id}`)),
      // refetchQueries: id ? [{ query: GET_ITEM_TYPE_QUERY, variables: { id } }] : null,
      // onError: (err) => alert(err.message),
    }
  );

  const [remove, { loading: removing }] = useMutation(DELETE_ITEM_TYPE_MUTATION, {
    // onCompleted: (res) => history.push(`/items`),
    // onError: (err) => alert(err.message),
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

  console.log(values);

  const setAttribute = (type, value) =>
    setValues({
      ...values,
      attributes: {
        ...values.attributes,
        [type]: value,
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
      type: "text",
      field: "effects",
      label: "Еффект",
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
      type: "number",
      field: "hpBonus",
      label: "Бонус Здоровья",
      length: 6,
    },
    {
      type: "number",
      field: "mpBonus",
      label: "Бонус Маны",
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
        length: 2,
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
        type: "radio",
        field: "attackType",
        label: "Тип атаки",
        options: getWeaponAttackArray(),
      },
      {
        type: "radio",
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
        field: "critAttack",
        label: "Множитель крита",
        length: 2,
      },
      // dice hit
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
        type: "radio",
        field: "damageType",
        label: "Тип урона",
        options: getWeaponDamageArray(),
      },

      {
        type: "number",
        field: "stackSize",
        label: "Стак",
        length: 3,
      },
      {
        type: "text",
        field: "effect",
        label: "Дополнительный эффект",
      },
      {
        type: "radio",
        field: "effect",
        label: "Дополнительное свойство",
        options: getAmmoEffectsArray(),
      },
    ],
  };

  const bonusFields = [
    {
      type: "multiselect",
      field: "skills",
      label: "Бонусные навыки",
      options: skillsList,
    },
    {
      type: "multiselect",
      field: "spells",
      label: "Бонусные заклинания",
      options: spellsList,
    },
    {
      type: "multiselect",
      field: "perks",
      label: "Бонусные перки",
      options: perksList,
    },
  ];

  const requestData = {
    variables: {
      ...values,
      item: values.item?.id || null,
      material: values.material?.id || null,
      quality: values.quality?.id || null,
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
        <AttributesForm attributes={values.attributes} setAttribute={setAttribute} />
        <DynamicForm
          title='Бонусы'
          fields={bonusFields}
          values={values}
          setValues={setCurrentValue}
        />
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

const ItemTypeEditWrapper = (props) => (
  <QueryLayout
    query={GET_SELECTED_LISTS_QUERY}
    Component={ItemTypeEdit}
    fetchPolicy='cache-first'
    {...props}
  />
);

export default ItemTypeEditWrapper;
