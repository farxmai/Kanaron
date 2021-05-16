import React, { useState } from "react";
import ClassLayout from "./sub-pages/ClassLayout";
import ClassEdit from "./sub-pages/ClassEdit";
import ClassView from "./sub-pages/ClassView";

const ClassWrapper = (props) => {
  const [edit, setEdit] = useState(false);
  const { id } = props.match.params;
  const handleSetEdit = () => setEdit(!edit);
  if (id === "new") return <ClassEdit />;
  return (
    <ClassLayout
      id={id}
      component={edit ? ClassEdit : ClassView}
      setEdit={handleSetEdit}
    />
  );
};

export default ClassWrapper;
