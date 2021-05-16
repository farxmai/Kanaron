/* eslint-disable object-curly-newline */
import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Mutation } from "react-apollo";
import { useHistory } from "react-router";
import { attributesTranslate } from "../../../components/translate/dictionary";
import {
  UPDATE_CLASS_MUTATION,
  CREATE_CLASS_MUTATION,
} from "../../../qql/ClassParams";
import {
  HeaderRow,
  InputRow,
  NumberRow,
  TextAreaRow,
  SubmitRow,
  ButtonRow,
  CheckListRow,
} from "../../../components/tables/FormRows";

const defAttributes = {
  Agility: 0,
  Charisma: 0,
  Constitution: 0,
  Intelligence: 0,
  Perception: 0,
  Spirit: 0,
  Strength: 0,
};

const ClassEdit = ({ data, skills, setEdit }) => {
  const [name, setName] = useState(data?.name || "");
  const [imgLink, setImgLink] = useState(data?.imgLink || "");
  const [description, setDescription] = useState(data?.description || "");
  const [c_skills, setSkills] = useState(data?.skills || []);
  const [attributes, setAttributes] = useState(
    data?.attributes || defAttributes
  );
  const [withAttributes, setWithAttributes] = useState(false);

  const history = useHistory();

  const setAttrib = (type, value) =>
    setAttributes({
      ...attributes,
      [type]: value,
    });

  const isInSkillList = (skill) => {
    const index = c_skills.findIndex((el) => el.id === skill.id);
    if (index === -1) return false;
    return true;
  };

  const handleSetSkill = (skill) => {
    const index = c_skills.findIndex((el) => el.id === skill.id);
    const newSkills = [...c_skills];
    if (index === -1) newSkills.push(skill);
    else newSkills.splice(index, 1);
    setSkills(newSkills);
  };

  const prepareRequestData = (id) => {
    const newAttributes = { ...attributes };
    delete newAttributes["__typename"];
    const newSkills = c_skills.map((skill) => skill.id);
    return {
      id,
      name,
      imgLink,
      description,
      attributes: newAttributes,
      skills: newSkills,
    };
  };

  const fields = [
    { label: "Название", component: InputRow, value: name, onChange: setName },
    {
      label: "Изображение",
      component: InputRow,
      value: imgLink,
      onChange: setImgLink,
    },
    {
      label: "Общее описание",
      component: TextAreaRow,
      value: description,
      onChange: setDescription,
    },
    {
      label: "Стартовые навыки",
      component: CheckListRow,
      onChange: handleSetSkill,
      array: skills,
      isInArray: isInSkillList,
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
      mutation={data?.id ? UPDATE_CLASS_MUTATION : CREATE_CLASS_MUTATION}
      variables={prepareRequestData(data?.id)}
      onCompleted={(res) => history.push(`/classes/${res.addClass.id}`)}
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
                ({
                  label,
                  component: Component,
                  value,
                  onChange,
                  array,
                  isInArray,
                }) => (
                  <Component
                    label={label}
                    onChange={onChange}
                    value={value}
                    array={array}
                    isInArray={isInArray}
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
