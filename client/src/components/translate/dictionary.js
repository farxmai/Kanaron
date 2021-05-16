/* eslint-disable object-curly-newline */
export const attributesTranslate = [
  { eng: "Strength", ru: "Сила" },
  { eng: "Agility", ru: "Ловкость" },
  { eng: "Constitution", ru: "Телосложение" },
  { eng: "Perception", ru: "Восприятие" },
  { eng: "Intelligence", ru: "Интеллект" },
  { eng: "Spirit", ru: "Дух" },
  { eng: "Charisma", ru: "Харизма" },
];

export const itemTypesTranslate = [
  { eng: "weapon", ru: "Оружие", items: [] },
  { eng: "armor", ru: "Доспех", items: [] },
  { eng: "necklace", ru: "Ожерелье", items: [] },
  { eng: "rings", ru: "Кольцо", items: [] },
  { eng: "accessories", ru: "Аксесуары", items: [] },
  { eng: "potion", ru: "Зелье", items: [] },
  { eng: "artefact", ru: "Артефакт", items: [] },
  { eng: "other", ru: "Другое", items: [] },
];

export const equipmentSlotsTranslate = [
  { eng: "weapon1", ru: "Оружие 1" },
  { eng: "weapon2", ru: "Оружие 2" },
  { eng: "armor", ru: "Доспех" },
  { eng: "helmet", ru: "Шлем" },
  { eng: "necklace", ru: "Ожерелье" },
  { eng: "rings", ru: "Кольца", type: "array" },
  { eng: "accessories", ru: "Аксесуары", type: "array" },
];

export const getItemTypesTranslate = (eng) => {
  const res = itemTypesTranslate.find((el) => el.eng === eng);
  return res.ru;
};

export const skillTypesTranslate = [
  { eng: "active", ru: "Активыный" },
  { eng: "passive", ru: "Пассивный" },
  { eng: "curse", ru: "Проклятье" },
  { eng: "blessing", ru: "Благословение" },
  { eng: "other", ru: "Другое" },
];

export const weaponParamsTranslate = [
  { eng: "baseAttack", ru: "Базовая атака", type: "number", placeholder: "d" },
  { eng: "critAttack", ru: "Крит атака (от)", type: "number", placeholder: "" },
  { eng: "critHit", ru: "Крит множитель", type: "number", placeholder: "x" },
  { eng: "damageDice", ru: "Урон (дайс)", type: "number", placeholder: "d" },
  {
    eng: "recharge",
    ru: "Перезарядка (ходов)",
    type: "number",
    placeholder: "",
  },
  { eng: "specialData", ru: "Заметки", type: "textarea" },
];

export const armorTypesTranslate = [
  { eng: "helmet", ru: "Шлем" },
  { eng: "armor", ru: "Броня" },
  { eng: "coat", ru: "Плащ" },
  { eng: "clothes", ru: "Одежда" },
];

export const armorParamsTranslate = [
  { eng: "baseDefense", ru: "Класс доспеха (КД)", type: "number" },
  { eng: "agilityCut", ru: "Штраф ловкости", type: "number" },
  { eng: "type", ru: "Тип брони", type: "input", array: armorTypesTranslate },
  { eng: "specialData", ru: "Заметки", type: "textarea" },
];
