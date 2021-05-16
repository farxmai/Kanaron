import React from "react";
import { ALTER_IMG } from "../../../constants";
import { EditButton } from "../../../components/buttons/EditButton";
import Attributes from "../../../components/tables/Attributes";
import "../Race.css";

const RaceView = ({ data, setEdit }) => (
  <div className="race-wrapper">
    <div className="d-flex flex-column flex-md-row">
      <div className="col-12 col-md-4">
        <div className="race-img-wrapper">
          <img
            className="race-img"
            src={data.imgLink || ALTER_IMG}
            alt={data.name}
            title={data.name}
          />
        </div>
        <div>
          <Attributes attributes={data.attributes} />
        </div>
      </div>
      <div className="col-12 col-md-8">
        <div className="d-flex flex-row align-items-center justify-content-between">
          <h2>{data.name}</h2>
          <EditButton setEdit={setEdit} />
        </div>
        <div>
          <p>
            <b>Средний рост: </b>
            {data.height}
          </p>
          <p>
            <b>Средняя продолжительность жизни: </b>
            {data.lifeSpan}
          </p>
        </div>
        <div>
          <h3>Внешность</h3>
          <hr />
          <p>{data.look}</p>
        </div>
        <div>
          <h3>Общие сведенья</h3>
          <hr />
          <p>{data.description}</p>
        </div>
        <div>
          <h3>Культура</h3>
          <hr />
          <p>{data.culture}</p>
        </div>
        {data.skills.length ? (
          <div>
            <h3>Навыки</h3>
            <hr />
            {data.skills.map((skill) => (
              <p>{skill.name} </p>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  </div>
);

export default RaceView;
