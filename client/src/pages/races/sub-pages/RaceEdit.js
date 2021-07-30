import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router";
import { Grid } from "@material-ui/core";

import {
  UPDATE_RACE_MUTATION,
  CREATE_RACE_MUTATION,
  GET_RACE_QUERY,
  DELETE_RACE_MUTATION,
} from "qql/RaceQuery";
import { GET_SELECTED_LISTS_QUERY } from "qql/GlobalQueries";

import { getDefaultState } from "helpers/getDefaultState";
import { FormTitle } from "components/forms/elements";
import { sizes } from "constants/sizes";
import QueryLayout from "components/layouts/QueryLayout";
import { AttributesForm, DynamicForm } from "components/forms";
import { DeleteButtonLarge, SaveButton } from "components/buttons";

const RaceEdit = ({
  race: data,
  skills: skillsList,
  spells: spellsList,
  perks: perksList,
  setEdit,
}) => {
  const history = useHistory();
  const id = data?.id || null;
  const [values, setValues] = useState(data || getDefaultState("race"));

  const [mutation, { loading, error }] = useMutation(
    id ? UPDATE_RACE_MUTATION : CREATE_RACE_MUTATION,
    {
      onCompleted: (res) =>
        id ? setEdit() : history.push(`/races/${res.addRace.id}`),
      refetchQueries: id
        ? [{ query: GET_RACE_QUERY, variables: { id } }]
        : null,
      onError: (err) => alert(err.message),
    }
  );

  const [remove, { loading: removing }] = useMutation(DELETE_RACE_MUTATION, {
    onCompleted: (res) => history.push(`/races`),
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
      type: "input",
      field: "imgLink",
      label: "Изображение",
    },
    {
      type: "radio",
      field: "size",
      label: "Размер",
      options: sizes,
    },
    {
      type: "number",
      field: "height",
      label: "Рост (см)",
      length: 3,
    },

    {
      type: "number",
      field: "lifeSpan",
      label: "Продолжительность жизни (лет)",
      length: 3,
    },
    {
      type: "text",
      field: "description",
      label: "Общее описание",
    },
    {
      type: "text",
      field: "look",
      label: "Внешний вид",
    },
    {
      type: "text",
      field: "culture",
      label: "Культура",
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
          title={`${id ? "Редактирование" : "Создание"} Расы`}
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
      </Grid>
      <Grid item xs={12} md={4}>
        <AttributesForm
          attributes={values.attributes}
          setAttribute={setAttribute}
        />
        <DynamicForm
          title="Бонусы"
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

const RaceEditWrapper = (props) => (
  <QueryLayout
    query={GET_SELECTED_LISTS_QUERY}
    Component={RaceEdit}
    fetchPolicy="cache-first"
    {...props}
  />
);

export default RaceEditWrapper;
