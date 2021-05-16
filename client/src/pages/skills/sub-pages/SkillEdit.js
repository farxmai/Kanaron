/* eslint-disable object-curly-newline */
import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Mutation } from "react-apollo";
import { useHistory } from "react-router";
import {
  attributesTranslate,
  skillTypesTranslate,
} from "../../../components/translate/dictionary";
import {
  HeaderRow,
  InputRow,
  NumberRow,
  TextAreaRow,
  SubmitRow,
  RadioGroupRow,
  ButtonRow,
} from "../../../components/tables/FormRows";
import {
  UPDATE_SKILL_MUTATION,
  CREATE_SKILL_MUTATION,
} from "../../../qql/SkillParams";

const defAttributes = {
  Agility: 0,
  Charisma: 0,
  Constitution: 0,
  Intelligence: 0,
  Perception: 0,
  Spirit: 0,
  Strength: 0,
};

const SkillEdit = ({ data, setEdit }) => {
  const [name, setName] = useState(data?.name || "");
  const [type, setType] = useState(data?.type || "");
  const [description, setDescription] = useState(data?.description || "");
  const [withAttributes, setWithAttributes] = useState(false);
  const [attributes, setAttributes] = useState(
    data?.attributes || defAttributes
  );

  const history = useHistory();

  const setAttrib = (type, value) =>
    setAttributes({
      ...attributes,
      [type]: value,
    });

  const prepareRequestData = (id) => {
    const newAttributes = { ...attributes };
    delete newAttributes["__typename"];
    return {
      id,
      name,
      type,
      description,
      attributes: newAttributes,
    };
  };

  const skillTypes = skillTypesTranslate.map((el) => ({
    value: el.eng,
    label: el.ru,
  }));

  const fields = [
    { label: "Название", component: InputRow, value: name, onChange: setName },
    {
      label: "Тип",
      component: RadioGroupRow,
      value: type,
      onChange: setType,
      array: skillTypes,
    },
    {
      label: "Общее описание",
      component: TextAreaRow,
      value: description,
      onChange: setDescription,
    },
  ];

  const attribFields = attributesTranslate.map((el) => ({
    label: el.ru,
    component: NumberRow,
    value: attributes[el.eng],
    onChange: (val) => setAttrib(el.eng, val),
  }));

  return (
    <Mutation
      mutation={data?.id ? UPDATE_SKILL_MUTATION : CREATE_SKILL_MUTATION}
      variables={prepareRequestData(data?.id)}
      onCompleted={(res) => history.push(`/skills/${res.addSkill.id}`)}
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
              <ButtonRow
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

export default SkillEdit;
