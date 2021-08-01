import { useState } from "react";
import { GET_ITEM_TYPE_QUERY } from "qql/ItemQuery";
import ItemTypeEdit from "./sub-pages/ItemTypeEdit";
import ItemTypeView from "./sub-pages/ItemTypeView";
import QueryLayout from "components/layouts/QueryLayout";

const Item = (props) => {
  const [edit, setEdit] = useState(false);
  const { id } = props.match.params;
  if (id === "new") return <ItemTypeEdit />;
  return (
    <QueryLayout
      query={GET_ITEM_TYPE_QUERY}
      variables={{ id }}
      Component={edit ? ItemTypeEdit : ItemTypeView}
      setEdit={() => setEdit(!edit)}
    />
  );
};

export default Item;
