import { getDiceLabel } from "constants/dices";
import { getSizeLabel } from "constants/sizes";

export const getRaceView = (data) => ({
  info: [
    {
      label: "Размер",
      value: data.size ? getSizeLabel(data.size) : null,
    },
    {
      label: "Средний рост",
      value: data.height ? `${data.height} см` : null,
    },
    {
      label: "Продолжительность жизни",
      value: data.lifeSpan ? `${data.lifeSpan} лет` : null,
    },
  ],
  cards: [
    { label: "Общие сведенья", value: data.description },
    { label: "Внешность", value: data.look },
    { label: "Культура и быт", value: data.description },
    { label: "Бонусные навыки", value: data.skills, listOf: "skills" },
    { label: "Бонусные заклинания", value: data.spells, listOf: "spells" },
    { label: "Бонусные перки", value: data.perks, listOf: "perks" },
  ],
});

export const getClassView = (data) => ({
  info: [
    {
      label: "Кубик ХП",
      value: data.hpDice ? getDiceLabel(data.hpDice) : null,
    },
  ],
  cards: [
    { label: "Описание", value: data.description },
    { label: "Бонусные навыки", value: data.skills, listOf: "skills" },
    { label: "Бонусные заклинания", value: data.spells, listOf: "spells" },
    { label: "Бонусные перки", value: data.perks, listOf: "perks" },
  ],
});
