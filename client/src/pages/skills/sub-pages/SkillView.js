import React from "react";
import Attributes from "../../../components/tables/Attributes";
import { EditButton } from "../../../components/buttons/EditButton";

const SkillView = ({ data, setEdit }) => (
  <div className="d-flex flex-column flex-md-row">
    <div className="col-12 col-md-8">
      <div className="d-flex flex-row align-items-center justify-content-between">
        <h2>{data.name}</h2>
        <EditButton setEdit={setEdit} />
      </div>
      <p>
        <b>Тип: </b>
        {data.type}
      </p>
      <p>
        <b>Описание: </b>
        {data.description}
      </p>
    </div>
    <div className="col-12 col-md-4">
      <Attributes attributes={data.attributes} />
    </div>
  </div>
);

export default SkillView;
