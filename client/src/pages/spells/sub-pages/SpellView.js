import React from "react";
import { EditButton } from "../../../components/buttons/EditButton";

const SpellView = ({ data, setEdit }) => (
  <div className="d-flex flex-column flex-md-row">
    <div className="col-12">
      <div className="d-flex flex-row align-items-center justify-content-between">
        <h2>{data.title}</h2>
        <EditButton setEdit={setEdit} />
      </div>
      <p>
        <b>Тип: </b>
        {data.type}
      </p>
      <p>
        <b>Уровень заклинания: </b>
        {data.level}
      </p>
      <p>
        <b>Школа: </b>
        {data.family}
      </p>
      <p>
        <b>Уровень концентрации: </b>
        {data.concentration}
      </p>
      <p>
        <b>Скорость каста: </b>
        {data.cast}
      </p>
      <p>
        <b>Очки маны: </b>
        {data.cost}
      </p>
      <p>
        <b>Описание: </b>
        {data.description}
      </p>
      <p>
        <b>Еффект: </b>
        {data.effect}
      </p>
      <p>
        <b>Бросок: </b>
        {data.diceCount}x{data.dice}
      </p>
    </div>
  </div>
);

export default SpellView;
