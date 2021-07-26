import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./DataManager.css";

const DataManager = ({
  races,
  classes,
  skills,
  perks,
  spells,
  currentItems,
  items,
  materials,
  qualities,
}) => {
  const data = [
    {
      title: "Базовые характеристики",
      list: [
        { array: races, label: "Расы", url: "/races" },
        { array: classes, label: "Классы", url: "/classes" },
        { array: skills, label: "Навыки", url: "/skills" },
        { array: perks, label: "Перки", url: "/perks" },
        { array: spells, label: "Заклинания", url: "/spells" },
      ],
    },
    {
      title: "Предметы",
      list: [
        { array: currentItems, label: "Предметы", url: "/items" },
        { array: items, label: "Типы предметов", url: "/item-types" },
        { array: materials, label: "Материалы", url: "/materials" },
        { array: qualities, label: "Качества", url: "/qualities" },
      ],
    },
  ];
  return (
    <div>
      {data.map((q) => (
        <div className="mb-5">
          <h3>{q.title}</h3>
          <div className="d-flex flex-wrap">
            {q.list.map((category) => (
              <div className="data-column p-2">
                <div className="d-flex flex-row align-items-center justify-content-between mb-2">
                  <Link to={`${category.url}`}>
                    <b>{category.label}</b>
                  </Link>
                  <Link
                    to={`${category.url}/new`}
                    className="btn btn-sm btn-outline-dark"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </Link>
                </div>
                <hr />
                <div className="d-flex flex-column">
                  {category.array?.map((el) => (
                    <Link to={`${category.url}/${el.id}`}>- {el.title}</Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataManager;
