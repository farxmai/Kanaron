import React from "react";
import { EditButton } from "../../../components/buttons/EditButton";

const SkillView = ({ data, setEdit }) => (
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
        <b>Очки действий: </b>
        {data.cost}
      </p>
      <p>
        <b>Описание: </b>
        {data.description}
      </p>
    </div>
  </div>
);

export default SkillView;
