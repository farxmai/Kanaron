import React from "react";
import { Query } from "react-apollo";
import { GET_RACE_QUERY } from "../../../qql/RaceParams";

const RaceLayout = ({ id, component: Component, setEdit }) => (
  <Query query={GET_RACE_QUERY} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return (
        <Component data={data.race} skills={data.skills} setEdit={setEdit} />
      );
    }}
  </Query>
);

export default RaceLayout;
