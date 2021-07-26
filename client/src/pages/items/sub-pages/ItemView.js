import React from "react";
import { ItemMainInfo } from "../../../components/tables/ItemTables";

const ItemView = ({ data, setEdit }) => {
  return (
    <div className="d-flex flex-column flex-md-row">
      <ItemMainInfo data={data} setEdit={setEdit} />
    </div>
  );
};

export default ItemView;
