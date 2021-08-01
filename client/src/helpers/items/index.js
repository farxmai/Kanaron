import {
  T_ITEM_ACCESSOR_TYPES,
  T_ITEM_AMMO_EFFECTS,
  T_ITEM_ARMOR_TYPES,
  T_ITEM_CONSUMABLE_TYPES,
  T_ITEM_TYPES,
  T_ITEM_WEAPON_ATTACK,
  T_ITEM_WEAPON_DAMAGE,
  T_ITEM_WEAPON_TYPES,
  T_MATERIAL_TYPES,
} from "translate/dictionary";

export const formatCurrentItems = (data) => {
  if (Array.isArray(data)) {
    return data.length
      ? data.map((el) => ({
          id: el.id,
          type: el.item.type,
          title: el.title || `${el.item.title} (${el.material.title})`,
          color: el.quality.color,
        }))
      : [];
  } else {
    return {
      id: data.id,
      type: data.item.type,
      title: data.title || `${data.item.title} (${data.material.title})`,
      color: data.quality.color,
    };
  }
};

export const formatItemsByGroups = (list) => {
  const groups = {};
  list.length &&
    list.forEach((el) => {
      if (el.type) {
        const rest = groups[el.type] || [];
        groups[el.type] = [...rest, el];
      } else {
        const rest = groups.other || [];
        groups.other = [...rest, el];
      }
    });
  return groups;
};

export const getCritHitsFromInt = (int) => {
  const arr = [];
  while (int <= 20) {
    arr.push(int);
    int++;
  }
  return arr;
};

export const getItemTypeLabel = (val) => T_ITEM_TYPES[val];
export const getItemTypeArray = () =>
  Object.keys(T_ITEM_TYPES).map((el) => ({ id: el, title: T_ITEM_TYPES[el] }));

export const getMaterialTypeLabel = (val) => T_MATERIAL_TYPES[val];
export const getMaterialTypeArray = () =>
  Object.keys(T_MATERIAL_TYPES).map((el) => ({ id: el, title: T_MATERIAL_TYPES[el] }));

export const getWeaponTypeLabel = (val) => T_ITEM_WEAPON_TYPES[val];
export const getWeaponTypeArray = () =>
  Object.keys(T_ITEM_WEAPON_TYPES).map((el) => ({ id: el, title: T_ITEM_WEAPON_TYPES[el] }));

export const getWeaponAttackLabel = (val) => T_ITEM_WEAPON_ATTACK[val];
export const getWeaponAttackArray = () =>
  Object.keys(T_ITEM_WEAPON_ATTACK).map((el) => ({ id: el, title: T_ITEM_WEAPON_ATTACK[el] }));
export const formatWeaponAttackArray = (arr) =>
  arr.map((el) => ({ id: el, title: T_ITEM_WEAPON_ATTACK[el] }));

export const getWeaponDamageLabel = (val) => T_ITEM_WEAPON_DAMAGE[val];
export const getWeaponDamageArray = () =>
  Object.keys(T_ITEM_WEAPON_DAMAGE).map((el) => ({ id: el, title: T_ITEM_WEAPON_DAMAGE[el] }));
export const formatWeaponDamageArray = (arr) =>
  arr.map((el) => ({ id: el, title: T_ITEM_WEAPON_DAMAGE[el] }));

export const getArmorTypeLabel = (val) => T_ITEM_ARMOR_TYPES[val];
export const getArmorTypeArray = () =>
  Object.keys(T_ITEM_ARMOR_TYPES).map((el) => ({ id: el, title: T_ITEM_ARMOR_TYPES[el] }));

export const getAccessorTypeLabel = (val) => T_ITEM_ACCESSOR_TYPES[val];
export const getAccessorTypeArray = () =>
  Object.keys(T_ITEM_ACCESSOR_TYPES).map((el) => ({ id: el, title: T_ITEM_ACCESSOR_TYPES[el] }));

export const getConsumableTypeLabel = (val) => T_ITEM_CONSUMABLE_TYPES[val];
export const getConsumableTypeArray = () =>
  Object.keys(T_ITEM_CONSUMABLE_TYPES).map((el) => ({
    id: el,
    title: T_ITEM_CONSUMABLE_TYPES[el],
  }));

export const getAmmoEffectsLabel = (val) => T_ITEM_AMMO_EFFECTS[val];
export const getAmmoEffectsArray = () =>
  Object.keys(T_ITEM_AMMO_EFFECTS).map((el) => ({ id: el, title: T_ITEM_AMMO_EFFECTS[el] }));
export const formatAmmoEffectsArray = (arr) =>
  arr.map((el) => ({ id: el, title: T_ITEM_AMMO_EFFECTS[el] }));
