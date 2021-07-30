import { defAttributes } from "./attributes";

export const defRase = {
  id: null,
  title: "",
  imgLink: "",
  look: "",
  description: "",
  culture: "",
  height: 170,
  size: 3,
  lifeSpan: 60,
  attributes: defAttributes,
  perks: [],
  skills: [],
  spells: [],
};

export const defClass = {
  id: null,
  title: "",
  imgLink: "",
  description: "",
  icon: "",
  hpDice: 6,
  attributes: defAttributes,
  perks: [],
  skills: [],
  spells: [],
};

export const defCurrentItem = {
  id: null,
  title: "",
  item: null,
  material: null,
  quality: null,
};

export const defItem = {
  id: null,
  title: "",
  description: "",
  effects: "",
  imgLink: "",
  cost: 0,
  weight: 0,
  hpBonus: 0,
  mpBonus: 0,
  type: "weapon",
  attributes: null,
  skills: [],
  spells: [],
  perks: [],
  typeProperties: {
    weapon: {
      type: "long_sword",
      attackType: "melee",
      damageType: "stabbing",
      baseAttack: 10,
      critAttack: 2,
      critHit: [20],
      dice: 20,
      diceCount: 1,
      attackRange: 1,
      recharge: 0,
    },
    armor: {
      type: "armor",
      baseDefense: 1,
    },
    accessor: {
      type: "ring",
    },
    consumable: {
      type: "potion",
      effect: "",
    },
    ammo: {
      baseAttack: 1,
      attackRange: 9,
      stackSize: 20,
      effect: "",
      damageType: "stabbing",
      effectType: "penetrated",
    },
  },
};
