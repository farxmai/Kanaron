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
  Query: {
    races: () => {
      return racesService.getRaces();
    },
    race: (_, param) => {
      return racesService.getRace(param);
    },
    classes: () => {
      return classesService.getClasses();
    },
    class: (_, param) => {
      return classesService.getClass(param);
    },
    currentItems: () => {
      return currentItemService.getCurrentItems();
    },
    currentItem: (_, param) => {
      return currentItemService.getCurrentItem(param);
    },
    items: () => {
      return itemService.getItems();
    },
    item: (_, param) => {
      return itemService.getItem(param);
    },
    materials: () => {
      return materialService.getMaterials();
    },
    material: (_, param) => {
      return materialService.getMaterial(param);
    },
    qualities: () => {
      return qualityService.getQualities();
    },
    quality: (_, param) => {
      return qualityService.getQuality(param);
    },
    skills: () => {
      return skillService.getSkills();
    },
    skill: (_, param) => {
      return skillService.getSkill(param);
    },
    spells: () => {
      return spellService.getSpells();
    },
    spell: (_, param) => {
      return spellService.getSpell(param);
    },
    perks: () => {
      return perkService.getPerks();
    },
    perk: (_, param) => {
      return perkService.getPerk(param);
    },
    characters: (_, param) => {
      return charactersService.getCharacters(param);
    },
    character: (_, param) => {
      return charactersService.getCharacter(param);
    },
  },
  Mutation: {
    ///////////////////USERS_GENERAL///////////////////
    signup: (param) => {
      return userService.createUser(param);
    },
    login: (param) => {
      console.log(param);
      return userService.getToken(param);
    },
    /////////////////RACES//////////////////
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
    addCurrentItem: (param) => {
      return currentItemService.saveCurrentItem(param);
    },
    updateCurrentItem: (param) => {
      return currentItemService.updateCurrentItem(param);
    },
    removeCurrentItem: (param) => {
      return currentItemService.deleteCurrentItem(param);
    },
    //////////////////ITEMS///////////////////
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
    addCharacter: (param) => {
      return charactersService.saveCharacter(param);
    },
    updateCharacter: (param) => {
      return charactersService.updateCharacter(param);
    },
    removeCharacter: (param) => {
      return charactersService.deleteCharacter(param);
    },
  },
  TypeProperties: {
    __resolveType(obj) {
      return obj.itemType;
    },
  },
};
