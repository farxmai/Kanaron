import { useState } from "react";
import { GET_ITEM_MATERIAL_QUERY } from "qql/ItemQuery";
import ItemMaterialEdit from "./sub-pages/ItemMaterialEdit";
import ItemMaterialView from "./sub-pages/ItemMaterialView";
import QueryLayout from "components/layouts/QueryLayout";

const Material = (props) => {
  const [edit, setEdit] = useState(false);
  const { id } = props.match.params;
  if (id === "new") return <ItemMaterialEdit />;
  return (
    <QueryLayout
      query={GET_ITEM_MATERIAL_QUERY}
      variables={{ id }}
      Component={edit ? ItemMaterialEdit : ItemMaterialView}
      setEdit={() => setEdit(!edit)}
    />
  );
};

export default Material;
