import React, { useState } from "react";
import SpellLayout from "./sub-pages/SpellLayout";
import SpellEdit from "./sub-pages/SpellEdit";
import SpellView from "./sub-pages/SpellView";

const SpellWrapper = (props) => {
  const [edit, setEdit] = useState(false);
  const { id } = props.match.params;
  const handleSetEdit = () => setEdit(!edit);
  if (id === "new") return <SpellEdit />;
  return (
    <SpellLayout
      id={id}
      component={edit ? SpellEdit : SpellView}
      setEdit={handleSetEdit}
    />
  );
};

export default SpellWrapper;
