import React, { useState } from "react";
import { Table } from "react-bootstrap";
import {
  CheckListRow,
  ButtonRow,
  NumberRow,
  InventoryItem,
  InventoryCategory,
  SelectRow,
  InputRow,
  SimpleRow,
  TextAreaRow,
  SubmitRow,
} from "./FormRows";
import {
  attributesTranslate,
  equipmentSlotsTranslate,
} from "../translate/dictionary";

export function CharacterSubmit() {
  return (
    <Table striped bordered hover variant="dark">
      <SubmitRow full />
    </Table>
  );
}

export function CharacterSkills({
  skills,
  total,
  limit,
  isInSkillList,
  handleSetSkill,
}) {
  return (
    <Table striped bordered hover variant="dark">
      <tbody>
        <CheckListRow
          label="Навыки"
          array={skills}
          total={total}
          limit={limit}
          onChange={handleSetSkill}
          isInArray={isInSkillList}
        />
      </tbody>
    </Table>
  );
}

export function CharacterInventory({
  coins,
  setCoins,
  items,
  setItem,
  inventory,
  changeItemCount,
}) {
  const [open, setOpen] = useState(false);
  return (
    <Table striped bordered variant="dark">
      <tbody>
        <NumberRow label="Монеты (железо)" value={coins} onChange={setCoins} />
        <ButtonRow
          label="Инвентарь"
          open={open}
          onClick={() => setOpen(!open)}
        />
        {open && (
          <>
            <tr>
              <td className="w-50">Взять</td>
              <td className="w-50">Предметы</td>
            </tr>
            <tr>
              <td className="w-50">
                {inventory.map((itemWrap) => (
                  <InventoryItem
                    itemWrap={itemWrap}
                    setItem={setItem}
                    changeItemCount={changeItemCount}
                  />
                ))}
              </td>
              <td className="w-50">
                {items.map((category) => (
                  <InventoryCategory category={category} setItem={setItem} />
                ))}
              </td>
            </tr>
          </>
        )}
      </tbody>
    </Table>
  );
}

export function CharacterInfo({
  name,
  setName,
  setLvl,
  races,
  setRace,
  classes,
  setClass,
  setMainAttrib,
  dodge,
  healthpoints,
  c_race,
  c_class,
  mainAttrib,
  lvl,
}) {
  const lvls = [];
  for (let i = 1; i <= 20; i++) {
    lvls.push(i);
  }

  const fields = [
    {
      label: "Имя",
      value: name,
      onChange: setName,
      placeholder: "Геройское имя",
      component: InputRow,
    },
    {
      label: "Уровень",
      value: lvl,
      array: lvls,
      onChange: setLvl,
      component: SelectRow,
    },
    {
      label: "Раса",
      value: c_race,
      array: races,
      onChange: setRace,
      component: SelectRow,
    },
    {
      label: "Класс",
      value: c_class,
      array: classes,
      onChange: setClass,
      component: SelectRow,
    },
    {
      label: "Основной атрибут",
      value: mainAttrib,
      array: attributesTranslate,
      onChange: setMainAttrib,
      component: SelectRow,
    },
    {
      label: "Уворот",
      value: dodge,
      placeholder: "КУ",
      component: SimpleRow,
    },
    {
      label: "Здоровье",
      value: healthpoints,
      placeholder: "ХП",
      component: SimpleRow,
    },
  ];

  return (
    <Table striped bordered hover variant="dark">
      <tbody>
        <tr>
          <td colSpan="2" align="center">
            Базовая информация
          </td>
        </tr>
        {fields.map(
          ({
            label,
            component: Component,
            value,
            onChange,
            placeholder,
            array,
          }) => (
            <Component
              label={label}
              onChange={onChange}
              value={value}
              array={array}
              placeholder={placeholder}
            />
          )
        )}
      </tbody>
    </Table>
  );
}

export function CharacterEquipment({ isInArray, items, setValue, equipment }) {
  const fields = equipmentSlotsTranslate.map(({ eng, ru, type }) => ({
    label: ru,
    value: equipment[eng],
    array: items[eng],
    isInArray: (el) => isInArray(el, eng),
    onChange: (val) => setValue(eng, val),
    component: type === "array" ? CheckListRow : SelectRow,
    total: 0,
    limit: 2,
  }));

  return (
    <Table striped hover variant="dark" className="w-100">
      <tbody>
        <tr>
          <td colSpan="2" align="center">
            Стартовая экипировка
          </td>
        </tr>
        {fields.map(
          ({
            label,
            component: Component,
            onChange,
            isInArray,
            array,
            total,
            limit,
            value,
          }) => (
            <Component
              value={value}
              label={label}
              onChange={onChange}
              array={array}
              isInArray={isInArray}
              total={total}
              limit={limit}
              nullable
            />
          )
        )}
      </tbody>
    </Table>
  );
}

export function CharacterBio({ description, setDescription, link, setLink }) {
  const fields = [
    {
      label: "Биография",
      value: description,
      onChange: setDescription,
      placeholder: "Немного о герое, по желанию...",
      component: TextAreaRow,
    },
    {
      label: "Изображение",
      value: link,
      onChange: setLink,
      placeholder: "Ссылка на клевый референс...",
      component: InputRow,
    },
  ];
  return (
    <Table striped bordered hover variant="dark">
      <tbody>
        <tr>
          <td colSpan="2" align="center">
            Дополнительная информация
          </td>
        </tr>
        {fields.map(
          ({ label, component: Component, value, onChange, placeholder }) => (
            <Component
              label={label}
              onChange={onChange}
              value={value}
              placeholder={placeholder}
            />
          )
        )}
      </tbody>
    </Table>
  );
}

export function CharacterAttacks({ attacks }) {
  const attaksFields = [
    { label: "Показатель атаки", span: 2, align: "center" },
    { label: "Рукопашная", value: attacks.handle },
    { label: "Стрелковая", value: attacks.range },
    { label: "Магическая", value: attacks.magic },
  ];
  return (
    <Table striped hover variant="dark" className="w-100">
      <tbody>
        {attaksFields.map(({ label, span = 1, align, value }) => (
          <tr>
            <td colSpan={span} align={align}>
              {label}
            </td>
            {value && (
              <td width={40} align="center">
                <b>{value}</b>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
