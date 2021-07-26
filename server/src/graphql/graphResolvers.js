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
    signup: (_, param) => {
      return userService.createUser(param);
    },
    login: (_, param) => {
      console.log(param);
      return userService.getToken(param);
    },
    /////////////////RACES//////////////////
    addRace: (_, param) => {
      return racesService.saveRace(param);
    },
    updateRace: (_, param) => {
      return racesService.updateRace(param);
    },
    removeRace: (_, param) => {
      return racesService.deleteRace(param);
    },
    /////////////////CLASSES//////////////////
    addClass: (_, param) => {
      return classesService.saveClass(param);
    },
    updateClass: (_, param) => {
      return classesService.updateClass(param);
    },
    removeClass: (_, param) => {
      return classesService.deleteClass(param);
    },
    //////////////////CURRENT ITEMS///////////////////
    addCurrentItem: (_, param) => {
      return currentItemService.saveCurrentItem(param);
    },
    updateCurrentItem: (_, param) => {
      return currentItemService.updateCurrentItem(param);
    },
    removeCurrentItem: (_, param) => {
      return currentItemService.deleteCurrentItem(param);
    },
    //////////////////ITEMS///////////////////
    addItem: (_, param) => {
      return itemService.saveItem(param);
    },
    updateItem: (_, param) => {
      return itemService.updateItem(param);
    },
    removeItem: (_, param) => {
      return itemService.deleteItem(param);
    },
    //////////////////MATERIALS///////////////////
    addMaterial: (_, param) => {
      return materialService.saveMaterial(param);
    },
    updateMaterial: (_, param) => {
      return materialService.updateMaterial(param);
    },
    removeMaterial: (_, param) => {
      return materialService.deleteMaterial(param);
    },
    //////////////////QUALITY///////////////////
    addQuality: (_, param) => {
      return qualityService.saveQuality(param);
    },
    updateQuality: (_, param) => {
      return qualityService.updateQuality(param);
    },
    removeQuality: (_, param) => {
      return qualityService.deleteQuality(param);
    },
    ///////////////////SKILLS///////////////////
    addSkill: (_, param) => {
      return skillService.saveSkill(param);
    },
    updateSkill: (_, param) => {
      return skillService.updateSkill(param);
    },
    removeSkill: (_, param) => {
      return skillService.deleteSkill(param);
    },
    ///////////////////SPELLS///////////////////
    addSpell: (_, param) => {
      return spellService.saveSpell(param);
    },
    updateSpell: (_, param) => {
      return spellService.updateSpell(param);
    },
    removeSpell: (_, param) => {
      return spellService.deleteSpell(param);
    },
    ///////////////////PERKS///////////////////
    addPerk: (_, param) => {
      return perkService.savePerk(param);
    },
    updatePerk: (_, param) => {
      return perkService.updatePerk(param);
    },
    removePerk: (_, param) => {
      return perkService.deletePerk(param);
    },
    ///////////////////CHARACTERS///////////////////
    addCharacter: (_, param) => {
      return charactersService.saveCharacter(param);
    },
    updateCharacter: (_, param) => {
      return charactersService.updateCharacter(param);
    },
    removeCharacter: (_, param) => {
      return charactersService.deleteCharacter(param);
    },
  },
  TypeProperties: {
    __resolveType(obj) {
      return obj.itemType;
    },
  },
};
