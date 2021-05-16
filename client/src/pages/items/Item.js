import React, { useState } from "react";
import ItemLayout from "./sub-pages/ItemLayout";
import ItemEdit from "./sub-pages/ItemEdit";
import ItemView from "./sub-pages/ItemView";

const ItemWrapper = (props) => {
  const [edit, setEdit] = useState(false);
  const { id } = props.match.params;
  const handleSetEdit = () => setEdit(!edit);
  if (id === "new") return <ItemEdit />;
  return (
    <ItemLayout
      id={id}
      component={edit ? ItemEdit : ItemView}
      setEdit={handleSetEdit}
    />
  );
};

export default ItemWrapper;
