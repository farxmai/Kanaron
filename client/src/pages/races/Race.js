import React, { useState } from "react";
import RaceView from "./sub-pages/RaceView";
import RaceEdit from "./sub-pages/RaceEdit";
import QueryLayout from "../../components/layouts/QueryLayout";
import { GET_RACE_QUERY } from "../../qql/RaceParams";

const Race = (props) => {
  const [edit, setEdit] = useState(false);
  const { id } = props.match.params;
  if (id === "new") return <RaceEdit />;
  return (
    <QueryLayout
      query={GET_RACE_QUERY}
      variables={{ id }}
      Component={edit ? RaceEdit : RaceView}
      setEdit={() => setEdit(!edit)}
    />
  );
};

export default Race;
