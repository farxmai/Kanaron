import React from "react";
import ClassIcon from "../../../components/icons/ClassIcons";
import Attributes from "../../../components/tables/Attributes";
import { EditButton } from "../../../components/buttons/EditButton";

const ClassView = ({ data, setEdit }) => (
  <div className="d-flex flex-column flex-md-row">
    <div className="col-12 col-md-8">
      <div className="d-flex flex-row align-items-center justify-content-between">
        <h2>
          <ClassIcon name={data.title} />
          {data.title}
        </h2>
        <EditButton setEdit={setEdit} />
      </div>
      <p>
        <b>Описание: </b>
        {data.description}
      </p>
      {data.skills.length ? (
        <div>
          <p>
            <b>Навыки</b>
          </p>
          <hr />
          {data.skills.map((skill) => (
            <p>{skill.title}</p>
          ))}
        </div>
      ) : null}
    </div>
    <div className="col-12 col-md-4">
      <Attributes attributes={data.attributes} />
    </div>
  </div>
);

export default ClassView;
