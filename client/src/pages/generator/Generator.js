/* eslint-disable no-underscore-dangle */
import React, { useState } from "react";
import { Mutation } from "react-apollo";
import {
  CREATE_CHARACTER_MUTATION,
  UPDATE_CHARACTER_MUTATION,
} from "../../qql/CharacterParams";
import {
  CharacterInfo,
  CharacterBio,
  CharacterSkills,
  CharacterAttacks,
  CharacterEquipment,
  CharacterInventory,
  CharacterSubmit,
} from "../../components/tables/CharacterTables";
import Attributes from "../../components/tables/Attributes";
import Loader from "../../components/loader/Loader";
import { defAttributes } from "../../def-states";
import {
  getInitRace,
  getInitClass,
  getInitEquip,
  getInitSkills,
  getInitMainAttrib,
  prepareEquipData,
  prepareSkillData,
  prepareInventData,
  getAttribute,
  getAttacks,
  getHealthPoints,
  getDodge,
} from "../../services/characterHandlers";

const Generator = (props) => {
  const init = props.character;
  console.log(init);

  const [name, setName] = useState(init.name || "");
  const [description, setDescription] = useState(init.description || "");
  const [imgLink, setLink] = useState(init.imgLink || "");
  const [lvl, setLvl] = useState(init.lvl || 1);
  const [coins, setCoins] = useState(init.coins || 0);
  const [c_race, setRace] = useState(getInitRace(init, props.races));
  const [c_class, setClass] = useState(getInitClass(init, props.classes));
  const [mainAttrib, setMainAttrib] = useState(getInitMainAttrib(init));
  const [attributes, setAttributes] = useState(
    init.attributes || defAttributes
  );
  const [equipment, setEquipment] = useState(getInitEquip(init, props.items));
  const [inventory, setInventory] = useState(init.inventory || []);
  const [skills, setSkills] = useState(getInitSkills(init, c_race, c_class));

  const userID = init.userID || props.user._id;

  const defaultSkills = [...c_race?.skills, ...c_class?.skills];
  const totalSkills = [...defaultSkills, ...skills];
  const attribArr = [
    c_race.attributes,
    c_class.attributes,
    attributes,
    ...totalSkills.map((el) => el.attributes),
    ...Object.keys(equipment).map(
      (key) => equipment[key].attributes || defAttributes
    ),
  ];

  const getAttrib = (field) => getAttribute(field, attribArr);

  const healthpoints = getHealthPoints(6, lvl, getAttrib);
  const attacks = getAttacks(lvl, getAttrib, mainAttrib);
  const dodge = getDodge(lvl, getAttrib);
  const skillLimit = 3 + lvl;
  const attribLimit = 2 + Math.round(lvl / 5);

  const handleSetAttribute = (type, value) =>
    setAttributes({
      ...attributes,
      [type]: value,
    });

  const handleSetEquipment = (type, value) => {
    if (type === "rings" || type === "accessories") {
      const index = equipment[type].findIndex((el) => el.id === value.id);
      const newValue = [...equipment[type]];
      if (index === -1) newValue.push(value);
      else newValue.splice(index, 1);
      return setEquipment({ ...equipment, [type]: newValue });
    }
    setEquipment({ ...equipment, [type]: value });
  };

  const handleSetInventory = (value) => {
    const newArray = [...inventory];
    const index = newArray.findIndex((el) => el.item.id === value.id);
    if (index === -1) {
      newArray.push({
        item: value,
        quantity: 1,
        quality: 1,
        known: true,
      });
    } else newArray.splice(index, 1);
    setInventory(newArray);
  };

  const handleSetSkill = (skill) => {
    const dIndex = defaultSkills.findIndex((el) => el.id === skill.id);
    if (dIndex === -1) {
      const index = skills.findIndex((el) => el.id === skill.id);
      const newSkills = [...skills];
      if (index === -1) newSkills.push(skill);
      else newSkills.splice(index, 1);
      setSkills(newSkills);
    }
  };

  const setItemQuantity = (id, count) => {
    const newArray = [...inventory];
    const index = newArray.findIndex((el) => el.item.id === id);
    newArray[index].quantity = count;
    setInventory(newArray);
  };

  const isInSkillList = (skill) => {
    const index = totalSkills.findIndex((el) => el.id === skill.id);
    if (index === -1) return false;
    return true;
  };

  const isInEquipment = (equip, type) => {
    const index = equipment[type].findIndex((el) => el.id === equip.id);
    if (index === -1) return false;
    return true;
  };

  const prepareRequestData = (id) => ({
    id,
    userID,
    name,
    description,
    imgLink,
    lvl,
    coins,
    healthpoints,
    attributes,
    mainAttribute: mainAttrib.eng,
    race: c_race.id,
    class: c_class.id,
    skills: prepareSkillData(totalSkills),
    inventory: prepareInventData(inventory),
    equipment: prepareEquipData(equipment),
  });

  return (
    <Mutation
      mutation={!init ? CREATE_CHARACTER_MUTATION : UPDATE_CHARACTER_MUTATION}
      variables={prepareRequestData(init?.id)}
      onCompleted={(data) => console.log(data)}
      onError={(err) => console.log(err, prepareRequestData(init?.id))}
    >
      {(mutation, { loading }) =>
        loading ? (
          <Loader />
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              mutation();
            }}
          >
            <h2>Генератор персонажа</h2>
            <hr />
            <div className="d-flex flex-column flex-lg-row justify-content-between">
              <div className="col-12 col-lg-8">
                <CharacterInfo
                  name={name}
                  lvl={lvl}
                  c_race={c_race}
                  c_class={c_class}
                  mainAttrib={mainAttrib}
                  dodge={dodge}
                  healthpoints={healthpoints}
                  setName={setName}
                  setLvl={setLvl}
                  setRace={setRace}
                  setClass={setClass}
                  setMainAttrib={setMainAttrib}
                  races={props.races}
                  classes={props.classes}
                />
                <CharacterBio
                  description={description}
                  setDescription={setDescription}
                  link={imgLink}
                  setLink={setLink}
                />
                <CharacterSkills
                  total={totalSkills.length}
                  limit={skillLimit}
                  skills={props.skills}
                  isInSkillList={isInSkillList}
                  handleSetSkill={handleSetSkill}
                />
                <CharacterInventory
                  coins={coins}
                  setCoins={setCoins}
                  items={props.inventoryItems}
                  inventory={inventory}
                  setItem={handleSetInventory}
                  changeItemCount={setItemQuantity}
                />
              </div>

              <div className="col-12 col-lg-4">
                <Attributes
                  isEdit
                  limit={attribLimit}
                  selfAttributes={attributes}
                  setValue={handleSetAttribute}
                  variant="dark"
                  getAttribute={getAttrib}
                />
                <CharacterAttacks attacks={attacks} />
                <CharacterEquipment
                  equipment={equipment}
                  isInArray={isInEquipment}
                  items={props.items}
                  setValue={handleSetEquipment}
                />
                <CharacterSubmit />
              </div>
            </div>
          </form>
        )
      }
    </Mutation>
  );
};

export default Generator;
