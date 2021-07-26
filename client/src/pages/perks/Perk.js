import React, { useState } from "react";
import PerkLayout from "./sub-pages/PerkLayout";
import PerkEdit from "./sub-pages/PerkEdit";
import PerkView from "./sub-pages/PerkView";

const PerkWrapper = (props) => {
  const [edit, setEdit] = useState(false);
  const { id } = props.match.params;
  const handleSetEdit = () => setEdit(!edit);
  if (id === "new") return <PerkEdit />;
  return (
    <PerkLayout
      id={id}
      component={edit ? PerkEdit : PerkView}
      setEdit={handleSetEdit}
    />
  );
};

export default PerkWrapper;
