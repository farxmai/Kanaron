import { useState } from "react";
import { GET_CLASS_QUERY } from "qql/ClassQuery";
import ClassEdit from "./sub-pages/ClassEdit";
import ClassView from "./sub-pages/ClassView";
import QueryLayout from "components/layouts/QueryLayout";

const Clss = (props) => {
  const [edit, setEdit] = useState(false);
  const { id } = props.match.params;
  if (id === "new") return <ClassEdit />;
  return (
    <QueryLayout
      query={GET_CLASS_QUERY}
      variables={{ id }}
      Component={edit ? ClassEdit : ClassView}
      setEdit={() => setEdit(!edit)}
    />
  );
};

export default Clss;
