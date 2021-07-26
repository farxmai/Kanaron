/* eslint-disable object-curly-newline */
import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Mutation } from "react-apollo";
import { useHistory } from "react-router";
import {
  HeaderRow,
  InputRow,
  SubmitRow,
  CheckListRow,
  NumberRow,
  ButtonRow,
  TextAreaRow,
} from "../../../components/tables/FormRows";
import {
  UPDATE_PERK_MUTATION,
  CREATE_PERK_MUTATION,
} from "../../../qql/PerkQuery";
import { attributesTranslate } from "../../../components/translate/dictionary";

const defAttributes = {
  Agility: 0,
  Charisma: 0,
  Constitution: 0,
  Intelligence: 0,
  Perception: 0,
  Spirit: 0,
  Strength: 0,
};

const PerkEdit = ({ data, skills: skillList, spells: spellsList, setEdit }) => {
  const [title, setTitle] = useState(data?.title || "");
  const [description, setDescription] = useState(data?.description || "");
  const [skills, setSkills] = useState(data?.skills || []);
  const [spells, setSpells] = useState(data?.spells || []);
  const [open, setOpen] = useState(false);
  const [attributes, setAttributes] = useState(
    data?.attributes || defAttributes
  );

  const history = useHistory();

  const prepareRequestData = (id) => {
    return {
      id,
      title,
      description,
      attributes,
      skills: skills.map((el) => el.id),
      spells: spells.map((el) => el.id),
    };
  };

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

  const setAttrib = (type, value) =>
    setAttributes({
      ...attributes,
      [type]: value,
    });

  const attribFields = attributesTranslate.map((el) => ({
    label: el.ru,
    component: NumberRow,
    value: attributes[el.eng],
    onChange: (val) => setAttrib(el.eng, val),
  }));

  const fields = [
    {
      label: "Название",
      component: InputRow,
      value: title,
      onChange: setTitle,
    },
    {
      label: "Описание",
      component: TextAreaRow,
      value: description,
      onChange: setDescription,
    },
    {
      label: "Бонусные навыки",
      component: CheckListRow,
      array: skillList,
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
  ];

  return (
    <Mutation
      mutation={data?.id ? UPDATE_PERK_MUTATION : CREATE_PERK_MUTATION}
      variables={prepareRequestData(data?.id)}
      onCompleted={(res) =>
        history.push(`/spells/${data?.id || res.addPerk.id}`)
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
              {fields.map(({ component: Component, ...rest }) => (
                <Component {...rest} />
              ))}
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

export default PerkEdit;
