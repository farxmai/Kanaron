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

const ClassEdit = ({
  data,
  skills: skillsList,
  spells: spellsList,
  perks: perksList,
  setEdit,
}) => {
  const [title, setTitle] = useState(data?.title || "");
  const [imgLink, setImgLink] = useState(data?.imgLink || "");
  const [description, setDescription] = useState(data?.description || "");
  const [skills, setSkills] = useState(data?.skills || []);
  const [spells, setSpells] = useState(data?.spells || []);
  const [perks, setPerks] = useState(data?.perks || []);

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

  const isInList = (searchArr, value) => {
    const index = searchArr.findIndex((el) => el.id === value.id);
    if (index === -1) return false;
    return true;
  };

  const handleSetValue = (searchArr, value, callback) => {
    const index = searchArr.findIndex((el) => el.id === value.id);
    console.log(index);
    const newArr = [...searchArr];
    if (index === -1) newArr.push(value);
    else newArr.splice(index, 1);
    callback(newArr);
  };

  const prepareRequestData = (id) => ({
    id,
    title,
    imgLink,
    description,
    attributes,
    skills: skills.map((skill) => skill.id),
    spells: spells.map((spell) => spell.id),
    perks: perks.map((perk) => perk.id),
  });

  const fields = [
    {
      label: "Название",
      component: InputRow,
      value: title,
      onChange: setTitle,
    },
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
      label: "Бонусные навыки",
      component: CheckListRow,
      array: skillsList,
      onChange: (val) => handleSetValue(skills, val, setSkills),
      isInArray: (val) => isInList(skills, val),
    },
    {
      label: "Бонусные заклинания",
      component: CheckListRow,
      array: spellsList,
      onChange: (val) => handleSetValue(spells, val, setSpells),
      isInArray: (val) => isInList(spells, val),
    },
    {
      label: "Бонусные перки",
      component: CheckListRow,
      array: perksList,
      onChange: (val) => handleSetValue(perks, val, setPerks),
      isInArray: (val) => isInList(perks, val),
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
      onCompleted={(res) =>
        res?.addClass?.id
          ? history.push(`/classes/${res.addClass.id}`)
          : window.location.reload()
      }
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
