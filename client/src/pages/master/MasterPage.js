import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignJustify,
  faUsers,
  faUserEdit,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import "./MasterPage.css";
import DataManagerLayout from "./DataManagerLayout";

const tabs = [
  { label: "Менеджер данных", icon: faDatabase },
  { label: "Редактор героев", icon: faUserEdit },
  { label: "Юзеры", icon: faUsers },
  { label: "Блог", icon: faAlignJustify },
];

const MasterMenu = ({ activeTab, setTab }) => (
  <div className="master-menu">
    {tabs.map((tab, i) => (
      <div
        key={i}
        className={`master-menu-item ${i === activeTab ? "active" : ""}`}
        onClick={() => setTab(i)}
      >
        <FontAwesomeIcon icon={tab.icon} className="master-menu-icon" />
        <div className="master-menu-text">{tab.label}</div>
      </div>
    ))}
  </div>
);

const MasterPageLayout = () => {
  const [activeTab, setTab] = useState(0);

  const getContent = (activeTab) => {
    switch (activeTab) {
      case 0:
        return <DataManagerLayout />;
      case 1:
        return <p>{activeTab}</p>;
      case 2:
        return <p>{activeTab}</p>;
      case 3:
        return <p>{activeTab}</p>;
      default:
        return <p>{activeTab}</p>;
    }
  };

  return (
    <div className="d-flex flex-colum">
      <MasterMenu activeTab={activeTab} setTab={setTab} />
      <div className="master-content-wrapper">{getContent(activeTab)}</div>
    </div>
  );
};

export default MasterPageLayout;
