import React, { useState } from "react";
import SkillLayout from "./sub-pages/SkillLayout";
import SkillEdit from "./sub-pages/SkillEdit";
import SkillView from "./sub-pages/SkillView";

const SkillWrapper = (props) => {
  const [edit, setEdit] = useState(false);
  const { id } = props.match.params;
  const handleSetEdit = () => setEdit(!edit);
  if (id === "new") return <SkillEdit />;
  return (
    <SkillLayout
      id={id}
      component={edit ? SkillEdit : SkillView}
      setEdit={handleSetEdit}
    />
  );
};

export default SkillWrapper;
