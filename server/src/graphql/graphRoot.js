const classesService = require("../services/ClassesService");
const racesService = require("../services/RecesService");
const itemService = require("../services/ItemService");
const skillService = require("../services/SkillService");
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
