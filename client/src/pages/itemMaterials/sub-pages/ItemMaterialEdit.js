import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router";
import { Grid } from "@material-ui/core";

import { getDefaultState } from "helpers/getDefaultState";
import { FormTitle } from "components/forms/elements";
import QueryLayout from "components/layouts/QueryLayout";
import { DeleteButtonLarge, SaveButton } from "components/buttons";
import { DynamicForm } from "components/forms";

import {
  CREATE_ITEM_MATERIAL_MUTATION,
  DELETE_ITEM_MATERIAL_MUTATION,
  UPDATE_ITEM_MATERIAL_MUTATION,
  GET_ITEM_MATERIAL_QUERY,
} from "qql/ItemQuery";
import { getMaterialTypeArray } from "helpers/items";

const ItemMaterialEdit = ({ material: data, setEdit }) => {
  const history = useHistory();
  const id = data?.id || null;
  const [values, setValues] = useState(getDefaultState("material", data));

  const [mutation, { loading, error }] = useMutation(
    id ? UPDATE_ITEM_MATERIAL_MUTATION : CREATE_ITEM_MATERIAL_MUTATION,
    {
      onCompleted: ({ addMaterial }) =>
        id ? setEdit() : history.push(`/item-materials/${addMaterial.id}`),
      refetchQueries: id ? [{ query: GET_ITEM_MATERIAL_QUERY, variables: { id } }] : null,
      onError: (err) => alert(err.message),
    }
  );

  const [remove, { loading: removing }] = useMutation(DELETE_ITEM_MATERIAL_MUTATION, {
    onCompleted: (res) => history.push(`/item-materials`),
    onError: (err) => alert(err.message),
  });

  const setCurrentValue = (type, value) =>
    setValues({
      ...values,
      [type]: value,
    });

  const infoFields = [
    {
      type: "input",
      field: "title",
      label: "Название",
    },
    {
      type: "text",
      field: "description",
      label: "Описание",
    },
    {
      type: "number",
      field: "index",
      label: "Уровень материала",
    },
    {
      type: "radio",
      field: "type",
      label: "Тип материала",
      options: getMaterialTypeArray(),
    },
  ];

  const requestData = {
    variables: {
      ...values,
    },
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <FormTitle title={`${id ? "Редактирование" : "Создание"} Материала`} onEdit={setEdit} />
      </Grid>
      <Grid item xs={12} md={8}>
        <DynamicForm
          title='Базовая информация'
          fields={infoFields}
          values={values}
          setValues={setCurrentValue}
        />
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

export default ItemMaterialEdit;
