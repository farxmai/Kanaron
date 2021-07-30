import React from "react";
import { EditButton } from "../../../components/buttons/EditButton";
// import Attributes from "../../../components/tables/Attributes";

const PerkView = ({ data, setEdit }) => (
  <div className="d-flex flex-column flex-md-row">
    <div className="col-12 col-md-8">
      <div className="d-flex flex-row align-items-center justify-content-between">
        <h2>{data.title}</h2>
        <EditButton setEdit={setEdit} />
      </div>
      <p>
        <b>Описание: </b>
        {data.description}
      </p>
      {/* {data.skills.length ? (
        <div>
          <h3>Навыки</h3>
          <hr />
          {data.skills.map((skill) => (
            <p>{skill.title} </p>
          ))}
        </div>
      ) : null}
      {data.spells.length ? (
        <div>
          <h3>Заклинания</h3>
          <hr />
          {data.spells.map((spell) => (
            <p>{spell.title} </p>
          ))}
        </div>
      ) : null} */}
    </div>
    {/* <Attributes attributes={data.attributes} /> */}
  </div>
);

export default PerkView;
