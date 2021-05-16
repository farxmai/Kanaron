/* eslint-disable object-curly-newline */
import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Mutation } from "react-apollo";
import { useHistory } from "react-router";
import { attributesTranslate } from "../../../components/translate/dictionary";
import {
  UPDATE_RACE_MUTATION,
  CREATE_RACE_MUTATION,
} from "../../../qql/RaceParams";
import {
  HeaderRow,
  InputRow,
  NumberRow,
  TextAreaRow,
  SubmitRow,
  CheckListRow,
  ButtonRow,
} from "../../../components/tables/FormRows";

const defAttributes = {
  Agility: 5,
  Charisma: 5,
  Constitution: 5,
  Intelligence: 5,
  Perception: 5,
  Spirit: 5,
  Strength: 5,
};

const RaceEdit = ({ data, skills, setEdit }) => {
  const [name, setName] = useState(data?.name || "");
  const [height, setHeight] = useState(data?.height || "");
  const [imgLink, setImgLink] = useState(data?.imgLink || "");
  const [lifeSpan, setLifeSpan] = useState(data?.lifeSpan || "");
  const [culture, setCulture] = useState(data?.culture || "");
  const [description, setDescription] = useState(data?.description || "");
  const [look, setLook] = useState(data?.look || "");
  const [c_skills, setSkills] = useState(data?.skills || []);
  const [attributes, setAttributes] = useState(
    data?.attributes || defAttributes
  );
  const [open, setOpen] = useState(false);

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
      culture,
      description,
      look,
      height,
      lifeSpan,
      skills: newSkills,
      attributes: newAttributes,
    };
  };

  const attribFields = attributesTranslate.map((el) => ({
    label: el.ru,
    component: NumberRow,
    value: attributes[el.eng],
    onChange: (val) => setAttrib(el.eng, val),
  }));

  const fields = [
    { label: "Название", component: InputRow, value: name, onChange: setName },
    {
      label: "Изображение",
      component: InputRow,
      value: imgLink,
      onChange: setImgLink,
    },
    { label: "Рост", component: NumberRow, value: height, onChange: setHeight },
    {
      label: "Срок жизни",
      component: NumberRow,
      value: lifeSpan,
      onChange: setLifeSpan,
    },
    {
      label: "Общее описание",
      component: TextAreaRow,
      value: description,
      onChange: setDescription,
    },
    {
      label: "Внешний вид",
      component: TextAreaRow,
      value: look,
      onChange: setLook,
    },
    {
      label: "Культура",
      component: TextAreaRow,
      value: culture,
      onChange: setCulture,
    },
    {
      label: "Стартовые навыки",
      component: CheckListRow,
      onChange: handleSetSkill,
      array: skills,
      isInArray: isInSkillList,
    },
  ];

  return (
    <Mutation
      mutation={data?.id ? UPDATE_RACE_MUTATION : CREATE_RACE_MUTATION}
      variables={prepareRequestData(data?.id)}
      onCompleted={(res) => history.push(`/races/${res.addRace.id}`)}
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
                label="Атрибуты"
                onClick={() => setOpen(!open)}
                open={open}
              />
              {open &&
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

export default RaceEdit;
