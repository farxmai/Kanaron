import React from "react";
import Attributes from "../../../components/tables/Attributes";
import {
  ItemMainInfo,
  ItemImage,
  WeaponStats,
  ArmorStats,
} from "../../../components/tables/ItemTables";

const isAttribBonus = (arr) => {
  const values = Object.values(arr).filter((el) => +el > 0);
  console.log(values);
  if (values.length) return true;
  return false;
};

const isSecondColumn = (data) => {
  if (
    data.imgLink ||
    data.type === "weapon" ||
    data.type === "armor" ||
    isAttribBonus(data.attributes)
  )
    return true;
  return false;
};

const ItemView = ({ data, setEdit }) => (
  <div className="d-flex flex-column flex-md-row">
    <div className={`col-12 col-md-${isSecondColumn(data) ? 8 : 12}`}>
      <ItemMainInfo data={data} setEdit={setEdit} />
    </div>
    <div className={`${isSecondColumn(data) ? "col-12 col-md-4" : "d-none"}`}>
      {data.imgLink && <ItemImage url={data.imgLink} />}
      {data.type === "weapon" && <WeaponStats weapon={data.weapon} />}
      {data.type === "armor" && <ArmorStats armor={data.armor} />}
      {isAttribBonus(data.attributes) && (
        <Attributes attributes={data.attributes} />
      )}
    </div>
  </div>
);

export default ItemView;
