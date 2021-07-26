import { IntrospectionFragmentMatcher } from "apollo-boost";

export const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: {
    __schema: {
      types: [
        {
          kind: "UNION",
          name: "TypeProperties",
          possibleTypes: [
            { name: "Weapon" },
            { name: "Armor" },
            { name: "Accessor" },
            { name: "Consumable" },
            { name: "Ammo" },
          ],
        },
      ],
    },
  },
});
