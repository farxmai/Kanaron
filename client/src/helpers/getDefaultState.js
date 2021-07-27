import { defRase } from "../constants/defaultStates";

export const getDefaultState = (key) => {
  switch (key) {
    case "race":
      return defRase;

    default:
      return {};
  }
};
