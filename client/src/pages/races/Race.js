import React, { useState } from "react";
import RaceView from "./sub-pages/RaceView";
import RaceEdit from "./sub-pages/RaseEdit";
import RaceLayout from "./sub-pages/RaceLayout";

const RaceWrapper = (props) => {
  const [edit, setEdit] = useState(false);
  const { id } = props.match.params;
  const handleSetEdit = () => setEdit(!edit);
  if (id === "new") return <RaceEdit />;
  return (
    <RaceLayout
      id={id}
      component={edit ? RaceEdit : RaceView}
      setEdit={handleSetEdit}
    />
  );
};

export default RaceWrapper;
