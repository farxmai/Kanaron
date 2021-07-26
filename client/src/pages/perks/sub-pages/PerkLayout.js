import React from "react";
import { Query } from "react-apollo";
import { GET_PERK_QUERY } from "../../../qql/PerkQuery";

const PerkLayout = ({ id, component: Component, setEdit }) => (
  <Query query={GET_PERK_QUERY} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      const { perk, ...rest } = data;
      return <Component data={perk} {...rest} setEdit={setEdit} />;
    }}
  </Query>
);

export default PerkLayout;
