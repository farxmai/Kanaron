import {
  formatAmmoEffectsArray,
  formatWeaponAttackArray,
  formatWeaponDamageArray,
} from "helpers/items";
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
  hpBonus: 0,
  mpBonus: 0,
  attributes: null,
  skills: [],
  spells: [],
  perks: [],
};

export const getDefItem = (data = {}) => ({
  id: data.id || null,
  title: data.title || "",
  description: data.description || "",
  imgLink: data.imgLink || "",
  cost: data.cost || 0,
  weight: data.weight || 0,
  type: data.type || "weapon",
  typeProperties: {
    weapon: {
      type: data?.typeProperties?.weapon?.type || "long_sword",
      attackType: formatWeaponAttackArray(data?.typeProperties?.weapon?.attackType || []),
      damageType: formatWeaponDamageArray(data?.typeProperties?.weapon?.damageType || []),
      baseAttack: data?.typeProperties?.weapon?.baseAttack || 10,
      critAttack: data?.typeProperties?.weapon?.critAttack || 2,
      critHit: data?.typeProperties?.weapon?.critHit || [19, 20],
      dice: data?.typeProperties?.weapon?.dice || 20,
      diceCount: data?.typeProperties?.weapon?.diceCount || 1,
      attackRange: data?.typeProperties?.weapon?.attackRange || 1,
      recharge: data?.typeProperties?.weapon?.recharge || 0,
    },
    armor: {
      type: data?.typeProperties?.armor?.type || "armor",
      baseDefense: data?.typeProperties?.armor?.baseDefense || 1,
      quickSlots: data?.typeProperties?.armor?.quickSlots || 0,
    },
    accessor: {
      type: data?.typeProperties?.accessor?.type || "ring",
    },
    consumable: {
      type: data?.typeProperties?.consumable?.type || "potion",
      effect: data?.typeProperties?.consumable?.effect || "",
    },
    ammo: {
      baseAttack: data?.typeProperties?.ammo?.baseAttack || 1,
      attackRange: data?.typeProperties?.ammo?.attackRange || 9,
      stackSize: data?.typeProperties?.ammo?.stackSize || 20,
      effect: data?.typeProperties?.ammo?.effect || "",
      damageType: formatWeaponDamageArray(data?.typeProperties?.ammo?.damageType || []),
      effectType: formatAmmoEffectsArray(data?.typeProperties?.ammo?.effectType || []),
    },
  },
});

export const getDefMaterial = (data = {}) => ({
  id: data.id || null,
  title: data.title || "",
  description: data.description || "",
  index: data.index || 1,
  type: data.type || "",
});

export const getDefQuality = (data = {}) => ({
  id: data.id || null,
  title: data.title || "",
  description: data.description || "",
  index: data.index || 1,
  type: data.type || "",
  color: data.color || "#919EAB",
});
