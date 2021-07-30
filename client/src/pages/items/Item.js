import { useState } from "react";
import { GET_ITEM_QUERY } from "qql/ItemQuery";
import ItemEdit from "./sub-pages/ItemEdit";
import ItemView from "./sub-pages/ItemView";
import QueryLayout from "components/layouts/QueryLayout";

const Item = (props) => {
  const [edit, setEdit] = useState(false);
  const { id } = props.match.params;
  if (id === "new") return <ItemEdit />;
  return (
    <QueryLayout
      query={GET_ITEM_QUERY}
      variables={{ id }}
      Component={edit ? ItemEdit : ItemView}
      setEdit={() => setEdit(!edit)}
    />
  );
};

export default Item;
