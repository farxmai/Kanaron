import {
  defRase,
  defClass,
  defCurrentItem,
  getDefItem,
  getDefMaterial,
  getDefQuality,
} from "../constants/defaultStates";

export const getDefaultState = (key, data) => {
  switch (key) {
    case "race":
      return defRase;
    case "class":
      return defClass;
    case "currentItem":
      return defCurrentItem;
    case "item":
      return getDefItem(data);
    case "material":
      return getDefMaterial(data);
    case "quality":
      return getDefQuality(data);
    default:
      return {};
  }
};
