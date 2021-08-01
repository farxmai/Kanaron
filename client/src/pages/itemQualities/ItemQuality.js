import { useState } from "react";
import { GET_ITEM_QUALITY_QUERY } from "qql/ItemQuery";
import ItemQualityEdit from "./sub-pages/ItemQualityEdit";
import ItemQualityView from "./sub-pages/ItemQualityView";
import QueryLayout from "components/layouts/QueryLayout";

const Quality = (props) => {
  const [edit, setEdit] = useState(false);
  const { id } = props.match.params;
  if (id === "new") return <ItemQualityEdit />;
  return (
    <QueryLayout
      query={GET_ITEM_QUALITY_QUERY}
      variables={{ id }}
      Component={edit ? ItemQualityEdit : ItemQualityView}
      setEdit={() => setEdit(!edit)}
    />
  );
};

export default Quality;
