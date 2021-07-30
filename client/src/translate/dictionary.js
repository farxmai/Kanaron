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

export const T_ITEM_TYPES = {
  armor: "Снаряжение",
  weapon: "Оружие",
  accessor: "Аксесуары",
  consumable: "Расходники",
  ammo: "Снаряды",
  other: "Другое",
};

export const T_ITEM_WEAPON_TYPES = {
  long_sword: "Длинный меч",
  short_sword: "Короткий меч",
  dagger: "Кинжал",
  long_bow: "Длинный лук",
  short_bow: "Короткий лук",
  hammer: "Молот",
  spear: "Копье",
  axe: "Топор",
  cudgel: "Дубина",
  other: "Другое",
};

export const T_ITEM_WEAPON_ATTACK = {
  melee: "Ближняя",
  range: "Стрелковая",
  throwing: "Метательная",
  magic: "Магическая",
};

export const T_ITEM_WEAPON_DAMAGE = {
  stabbing: "Колющий",
  crushing: "Дробящий",
  chopping: "Рубящий",
  magical: "Магический",
  mental: "Ментальный",
  stressful: "Стрессовый",
};

export const T_ITEM_ARMOR_TYPES = {
  armor: "Броня",
  helmet: "Шлем",
  belt: "Пояс",
  coat: "Плащ",
  bag: "Сумка",
  clothes: "Одежда",
  boots: "Ботинки",
  other: "Другое",
};

export const T_ITEM_ACCESSOR_TYPES = {
  amulet: "Амулет",
  ring: "Кольцо",
  talisman: "Талисман",
  artefact: "Артефакт",
  other: "Другое",
};

export const T_ITEM_CONSUMABLE_TYPES = {
  potion: "Зелье",
  food: "Пища",
  drink: "Напиток",
  other: "Другое",
};

export const T_ITEM_AMMO_EFFECTS = {
  bleed: "Кровотечение",
  sharp: "Острота",
  penetrated: "Пробивание",
  aimed: "Наведение",
  other: "Другое",
};

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

export const spellTypesTranslate = [
  { eng: "active", ru: "Активыный" },
  { eng: "passive", ru: "Пассивный" },
  { eng: "trick", ru: "Трюк" },
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
