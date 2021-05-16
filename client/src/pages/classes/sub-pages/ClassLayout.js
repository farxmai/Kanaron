import React from "react";
import { Query } from "react-apollo";
import { GET_CLASS_QUERY } from "../../../qql/ClassParams";

const ClassLayout = ({ id, component: Component, setEdit }) => (
  <Query query={GET_CLASS_QUERY} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return (
        <Component data={data.class} skills={data.skills} setEdit={setEdit} />
      );
    }}
  </Query>
);

export default ClassLayout;
