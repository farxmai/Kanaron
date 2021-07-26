import React from "react";
import { Query } from "react-apollo";
import { GET_ITEM_QUERY } from "../../../qql/ItemParams";

const ItemLayout = ({ id, component: Component, setEdit }) => (
  <Query query={GET_ITEM_QUERY} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      console.log(data);
      // return null;
      return <Component data={data.item} setEdit={setEdit} />;
    }}
  </Query>
);

export default ItemLayout;
