/* eslint-disable arrow-body-style */

import { attributesTranslate } from "../translate/dictionary";

export const prepareEquipData = (equipment) => {
  const res = {};
  Object.keys(equipment).forEach((key) => {
    if (Array.isArray(equipment[key]) && equipment[key].length) {
      res[key] = equipment[key].map((obj) => ({
        item: obj.id,
        quantity: 1,
        quality: 1,
        known: true,
      }));
    }
    if (typeof equipment[key] === "object" && Object.keys(equipment[key]).length) {
      res[key] = {
        item: equipment[key].id,
        quantity: 1,
        quality: 1,
        known: true,
      };
    }
  });
  return res;
};

export const prepareSkillData = (skills) => {
  return skills.map((skill) => ({ skill: skill.id, skillLvl: 1 }));
};

export const prepareInventData = (inventory) => {
  return inventory
    .filter((item) => item.quantity > 0)
    .map((item) => ({ ...item, item: item.item.id }));
};

export const getAttribute = (field, paramsArr) =>
  paramsArr.reduce((acc, value) => acc + value[field], 0);

export const getHealthPoints = (base, lvl, getAttribute) =>
  base + +lvl * getAttribute("Constitution");

export const getDodge = (lvl, getAttribute) => {
  return Math.round(+lvl + (getAttribute("Agility") + getAttribute("Perception") / 2));
};

export const getHandAttack = (lvl, getAttribute, mainAttrib) => {
  return +lvl + (mainAttrib.eng === "Agility" ? getAttribute("Agility") : getAttribute("Strength"));
};

export const getMageAttack = (lvl, getAttribute, mainAttrib) =>
  +lvl +
  (mainAttrib.eng === "Spirit"
    ? getAttribute("Spirit")
    : mainAttrib.eng === "Charisma"
    ? getAttribute("Charisma")
    : getAttribute("Intelligence"));

export const getAttacks = (lvl, getAttribute, mainAttrib) => ({
  handle: getHandAttack(lvl, getAttribute, mainAttrib),
  range: getDodge(lvl, getAttribute),
  magic: getMageAttack(lvl, getAttribute, mainAttrib),
});

export const getDefaultEquip = (items) => {
  const res = {};
  Object.keys(items).forEach((key) => {
    if (key === "rings" || key === "accessories") res[key] = [];
    else res[key] = items[key].length ? items[key][0] : {};
  });
  return res;
};

export const getInitMainAttrib = (init) =>
  init ? attributesTranslate.find((el) => el.eng === init.mainAttribute) : attributesTranslate[0];

export const getInitEquip = (init, items) => {
  if (init) {
    const res = {};
    const { equipment } = init;
    Object.keys(items).forEach((key) => {
      if (key === "rings" || key === "accessories") {
        res[key] = equipment[key] ? equipment[key].map((el) => el.item) : [];
      } else res[key] = equipment[key] ? equipment[key].item : {};
    });
    return res;
  }
  return getDefaultEquip(items);
};

export const getInitRace = (init, races) =>
  init ? races.find((el) => el.id === init.race.id) : races[0];

export const getInitClass = (init, classes) =>
  init ? classes.find((el) => el.id === init.class.id) : classes[0];

export const getInitSkills = (init, c_race, c_class) => {
  if (init) {
    const reserveIds = [...c_race.skills, c_class.skills].map((el) => el.id);
    return init.skills.map((el) => el.skill).filter((el) => !reserveIds.includes(el.id));
  }
  return [];
};
