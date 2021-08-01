import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router";
import { Grid } from "@material-ui/core";

import { getDefaultState } from "helpers/getDefaultState";
import { FormTitle } from "components/forms/elements";
import { DeleteButtonLarge, SaveButton } from "components/buttons";
import { DynamicForm } from "components/forms";

import {
  CREATE_ITEM_QUALITY_MUTATION,
  DELETE_ITEM_QUALITY_MUTATION,
  UPDATE_ITEM_QUALITY_MUTATION,
  GET_ITEM_QUALITY_QUERY,
} from "qql/ItemQuery";

import { getMaterialTypeArray } from "helpers/items";

const ItemQualityEdit = ({ quality: data, setEdit }) => {
  const history = useHistory();
  const id = data?.id || null;
  const [values, setValues] = useState(getDefaultState("quality", data));

  const [mutation, { loading, error }] = useMutation(
    id ? UPDATE_ITEM_QUALITY_MUTATION : CREATE_ITEM_QUALITY_MUTATION,
    {
      onCompleted: ({ addQuality }) =>
        id ? setEdit() : history.push(`/item-qualities/${addQuality.id}`),
      refetchQueries: id ? [{ query: GET_ITEM_QUALITY_QUERY, variables: { id } }] : null,
      onError: (err) => alert(err.message),
    }
  );

  const [remove, { loading: removing }] = useMutation(DELETE_ITEM_QUALITY_MUTATION, {
    onCompleted: (res) => history.push(`/item-qualities`),
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
      label: "Уровень",
    },
    {
      type: "radio",
      field: "type",
      label: "Тип материала",
      options: getMaterialTypeArray(),
    },
    {
      type: "color",
      field: "color",
      label: "Цвет",
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
        <FormTitle title={`${id ? "Редактирование" : "Создание"} Качества`} onEdit={setEdit} />
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

export default ItemQualityEdit;
