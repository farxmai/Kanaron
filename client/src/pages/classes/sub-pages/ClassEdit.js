import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router";
import { Grid } from "@material-ui/core";

import {
  UPDATE_CLASS_MUTATION,
  CREATE_CLASS_MUTATION,
  GET_CLASS_QUERY,
  DELETE_CLASS_MUTATION,
} from "qql/ClassQuery";
import { GET_SELECTED_LISTS_QUERY } from "qql/GlobalQueries";

import { dices } from "constants/dices";
import { getDefaultState } from "helpers/getDefaultState";
import { FormTitle } from "components/forms/elements";
import QueryLayout from "components/layouts/QueryLayout";
import { DeleteButtonLarge, SaveButton } from "components/buttons";
import { AttributesForm, IconForm, DynamicForm } from "components/forms";

const ClassEdit = ({
  class: data,
  skills: skillsList,
  spells: spellsList,
  perks: perksList,
  setEdit,
}) => {
  const history = useHistory();
  const id = data?.id || null;
  const [values, setValues] = useState(data || getDefaultState("class"));

  const [mutation, { loading, error }] = useMutation(
    id ? UPDATE_CLASS_MUTATION : CREATE_CLASS_MUTATION,
    {
      onCompleted: (res) =>
        id ? setEdit() : history.push(`/classes/${res.addClass.id}`),
      refetchQueries: id
        ? [{ query: GET_CLASS_QUERY, variables: { id } }]
        : null,
      onError: (err) => alert(err.message),
    }
  );

  const [remove, { loading: removing }] = useMutation(DELETE_CLASS_MUTATION, {
    onCompleted: (res) => history.push(`/classes`),
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

  const setIcon = (value) =>
    setValues({
      ...values,
      icon: value,
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
      type: "radio",
      field: "hpDice",
      label: "Кубик ХП",
      options: dices,
    },
    {
      type: "text",
      field: "description",
      label: "Описание",
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
      skills: values.skills.map((el) => el.id),
      spells: values.spells.map((el) => el.id),
      perks: values.perks.map((el) => el.id),
    },
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <FormTitle
          title={`${id ? "Редактирование" : "Создание"} Класса`}
          onEdit={setEdit}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <DynamicForm
          title="Базовая информация"
          fields={infoFields}
          values={values}
          setValues={setCurrentValue}
        />
        <DynamicForm
          title="Бонусы"
          fields={bonusFields}
          values={values}
          setValues={setCurrentValue}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <AttributesForm
          attributes={values.attributes}
          setAttribute={setAttribute}
        />
        <IconForm value={values.icon} setValue={setIcon} />
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

const ClassEditWrapper = (props) => (
  <QueryLayout
    query={GET_SELECTED_LISTS_QUERY}
    Component={ClassEdit}
    fetchPolicy="cache-first"
    {...props}
  />
);

export default ClassEditWrapper;
