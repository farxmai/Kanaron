export const dices = [
  { label: "d4", value: 4 },
  { label: "d6", value: 6 },
  { label: "d8", value: 8 },
  { label: "d10", value: 10 },
  { label: "d12", value: 12 },
  { label: "d20", value: 20 },
  { label: "d100", value: 100 },
];

export const getDiceLabel = (val) =>
  dices.find((el) => el.value === val)?.label;
