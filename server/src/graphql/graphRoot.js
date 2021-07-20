const classesService = require("../services/ClassesService");
const racesService = require("../services/RacesService");
const itemService = require("../services/ItemService");
const currentItemService = require("../services/CurrentItemService");

const materialService = require("../services/MaterialService");
const qualityService = require("../services/QualityService");
const skillService = require("../services/SkillService");
const spellService = require("../services/SpellService");
const perkService = require("../services/PerkService");
const charactersService = require("../services/CharacterService");
const userService = require("../services/UserService");

module.exports = {
  ///////////////////USERS_BY_ADMIN///////////////////

  // user: () => {
  //     return userService.getUsers(param)
  // },
  // users: (param) => {
  //     return userService.getUser(param)
  // },
  // addUser: (param) => {
  //     return userService.saveUser(param)
  // },
  // updateUser: (param) => {
  //     return userService.updateUser(param)
  // },
  // removeUser: (param) => {
  //     return userService.deleteUser(param)
  // },
  ///////////////////USERS_GENERAL///////////////////

  signup: (param) => {
    return userService.createUser(param);
  },
  login: (param) => {
    console.log(param);
    return userService.getToken(param);
  },

  /////////////////RACES//////////////////

  races: () => {
    return racesService.getRaces();
  },
  race: (param) => {
    return racesService.getRace(param);
  },
  addRace: (param) => {
    return racesService.saveRace(param);
  },
  updateRace: (param) => {
    return racesService.updateRace(param);
  },
  removeRace: (param) => {
    return racesService.deleteRace(param);
  },

  /////////////////CLASSES//////////////////

  classes: () => {
    return classesService.getClasses();
  },
  class: (param) => {
    return classesService.getClass(param);
  },
  addClass: (param) => {
    return classesService.saveClass(param);
  },
  updateClass: (param) => {
    return classesService.updateClass(param);
  },
  removeClass: (param) => {
    return classesService.deleteClass(param);
  },

  //////////////////CURRENT ITEMS///////////////////

  currentItems: (param = {}) => {
    return currentItemService.getCurrentItems(param);
  },
  currentItem: (param) => {
    return currentItemService.getCurrentItem(param);
  },
  addCurrentItem: (param) => {
    return currentItemService.saveCurrentItem(param);
  },
  updateCurrentItem: (param) => {
    return currentItemService.updateCurrentItem(param);
  },
  removeCurrent: (param) => {
    return currentItemService.deleteCurrentItem(param);
  },

  //////////////////ITEMS///////////////////

  items: (param) => {
    return itemService.getItems(param);
  },
  item: (param) => {
    return itemService.getItem(param);
  },
  addItem: (param) => {
    return itemService.saveItem(param);
  },
  updateItem: (param) => {
    return itemService.updateItem(param);
  },
  removeItem: (param) => {
    return itemService.deleteItem(param);
  },

  //////////////////MATERIALS///////////////////

  materials: (param) => {
    return materialService.getMaterials(param);
  },
  material: (param) => {
    return materialService.getMaterial(param);
  },
  addMaterial: (param) => {
    return materialService.saveMaterial(param);
  },
  updateMaterial: (param) => {
    return materialService.updateMaterial(param);
  },
  removeMaterial: (param) => {
    return materialService.deleteMaterial(param);
  },

  //////////////////QUALITY///////////////////

  qualities: (param) => {
    return qualityService.getQualities(param);
  },
  quality: (param) => {
    return qualityService.getQuality(param);
  },
  addQuality: (param) => {
    return qualityService.saveQuality(param);
  },
  updateQuality: (param) => {
    return qualityService.updateQuality(param);
  },
  removeQuality: (param) => {
    return qualityService.deleteQuality(param);
  },

  ///////////////////SKILLS///////////////////

  skills: (param) => {
    return skillService.getSkills(param);
  },
  skill: (param) => {
    return skillService.getSkill(param);
  },
  addSkill: (param) => {
    return skillService.saveSkill(param);
  },
  updateSkill: (param) => {
    return skillService.updateSkill(param);
  },
  removeSkill: (param) => {
    return skillService.deleteSkill(param);
  },

  ///////////////////SPELLS///////////////////

  spells: (param) => {
    return spellService.getSpells(param);
  },
  spell: (param) => {
    return spellService.getSpell(param);
  },
  addSpell: (param) => {
    return spellService.saveSpell(param);
  },
  updateSpell: (param) => {
    return spellService.updateSpell(param);
  },
  removeSpell: (param) => {
    return spellService.deleteSpell(param);
  },

  ///////////////////PERKS///////////////////

  perks: (param) => {
    return perkService.getPerks(param);
  },
  perk: (param) => {
    return perkService.getPerk(param);
  },
  addPerk: (param) => {
    return perkService.savePerk(param);
  },
  updatePerk: (param) => {
    return perkService.updatePerk(param);
  },
  removePerk: (param) => {
    return perkService.deletePerk(param);
  },

  ///////////////////CHARACTERS///////////////////

  characters: (param) => {
    return charactersService.getCharacters(param);
  },
  character: (param) => {
    return charactersService.getCharacter(param);
  },
  addCharacter: (param) => {
    return charactersService.saveCharacter(param);
  },
  updateCharacter: (param) => {
    return charactersService.updateCharacter(param);
  },
  removeCharacter: (param) => {
    return charactersService.deleteCharacter(param);
  },
};
