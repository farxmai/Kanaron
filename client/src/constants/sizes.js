export const sizes = [
  { label: "Очень маленький", value: 1 },
  { label: "Маленький", value: 2 },
  { label: "Средний", value: 3 },
  { label: "Большой", value: 4 },
  { label: "Огромный", value: 5 },
  { label: "Колоссальный", value: 6 },
];

export const getSizeLabel = (val) =>
  sizes.find((el) => el.value === val)?.label;
