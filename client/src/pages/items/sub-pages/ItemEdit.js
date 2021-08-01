import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router";
import { Grid } from "@material-ui/core";

import { getDefaultState } from "helpers/getDefaultState";
import { FormTitle } from "components/forms/elements";
import QueryLayout from "components/layouts/QueryLayout";
import { DeleteButtonLarge, SaveButton } from "components/buttons";
import { AttributesForm, DynamicForm } from "components/forms";

import {
  CREATE_ITEM_MUTATION,
  DELETE_ITEM_MUTATION,
  GET_ITEM_QUERY,
  UPDATE_ITEM_MUTATION,
} from "qql/ItemQuery";
import { GET_SELECTED_LISTS_ITEMS_QUERY } from "qql/GlobalQueries";
import { BaseModal } from "components/modals/BaseModal";
import ItemTypeEditWrapper from "./ItemTypesForm";

const ItemEdit = ({
  currentItem: data,
  items: itemsList,
  materials: materialsList,
  qualities: qualitiesList,
  skills: skillsList,
  spells: spellsList,
  perks: perksList,
  setEdit,
}) => {
  const history = useHistory();
  const id = data?.id || null;
  const [values, setValues] = useState(data || getDefaultState("currentItem"));

  const [mutation, { loading, error }] = useMutation(
    id ? UPDATE_ITEM_MUTATION : CREATE_ITEM_MUTATION,
    {
      onCompleted: (res) => (id ? setEdit() : history.push(`/items/${res.addCurrentItem.id}`)),
      refetchQueries: id ? [{ query: GET_ITEM_QUERY, variables: { id } }] : null,
      onError: (err) => alert(err.message),
    }
  );

  const [remove, { loading: removing }] = useMutation(DELETE_ITEM_MUTATION, {
    onCompleted: (res) => history.push(`/items`),
    onError: (err) => alert(err.message),
  });

  const setCurrentValue = (type, value) =>
    setValues({
      ...values,
      [type]: value,
    });

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
      type: "select",
      field: "item",
      label: "Тип Предмета",
      options: itemsList,
    },
    {
      type: "select",
      field: "material",
      label: "Материал",
      options: materialsList,
    },
    {
      type: "select",
      field: "quality",
      label: "Качество",
      options: qualitiesList,
    },
  ];

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
      skills: values.skills.map((el) => el.id),
      spells: values.spells.map((el) => el.id),
      perks: values.perks.map((el) => el.id),
    },
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <FormTitle title={`${id ? "Редактирование" : "Создание"} Предмета`} onEdit={setEdit} />
      </Grid>
      <Grid item xs={12} md={8}>
        <DynamicForm
          title='Базовая информация'
          fields={infoFields}
          values={values}
          setValues={setCurrentValue}
        />
        <DynamicForm
          title='Бонусы'
          fields={bonusFields}
          values={values}
          setValues={setCurrentValue}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <AttributesForm attributes={values.attributes} setAttribute={setAttribute} />

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

const ItemEditWrapper = (props) => (
  <QueryLayout
    query={GET_SELECTED_LISTS_ITEMS_QUERY}
    Component={ItemEdit}
    fetchPolicy='cache-first'
    {...props}
  />
);

export default ItemEditWrapper;
