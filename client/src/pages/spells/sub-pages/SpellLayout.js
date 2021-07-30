import React from "react";
import { Query } from "@apollo/client";
import { GET_SPELL_QUERY } from "../../../qql/SpellQuery";

const SpellLayout = ({ id, component: Component, setEdit }) => (
  <Query query={GET_SPELL_QUERY} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return <Component data={data.spell} setEdit={setEdit} />;
    }}
  </Query>
);

export default SpellLayout;
