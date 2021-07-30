import { defRase, defClass, defCurrentItem, defItem } from "../constants/defaultStates";

export const getDefaultState = (key) => {
  switch (key) {
    case "race":
      return defRase;
    case "class":
      return defClass;
    case "currentItem":
      return defCurrentItem;
    case "item":
      return defItem;
    default:
      return {};
  }
};
