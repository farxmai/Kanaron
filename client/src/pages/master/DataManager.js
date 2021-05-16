import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./DataManager.css";

const DataManager = ({ races, classes, skills, items }) => {
  const data = [
    { array: races, label: "Расы", url: "/races/" },
    { array: items, label: "Предметы", url: "/items/" },
    { array: skills, label: "Навыки", url: "/skills/" },
    { array: classes, label: "Классы", url: "/classes/" },
  ];
  return (
    <div className="d-flex flex-wrap">
      {data.map((category) => (
        <div className="data-column p-2">
          <div className="d-flex flex-row align-items-center justify-content-between mb-2">
            <b>{category.label}</b>
            <Link
              to={`${category.url}new`}
              className="btn btn-sm btn-outline-dark"
            >
              <FontAwesomeIcon icon={faPlus} />
            </Link>
          </div>
          <hr />
          <div className="d-flex flex-column">
            {category.array?.map((el) => (
              <Link to={`${category.url}${el.id}`}>- {el.name}</Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataManager;
