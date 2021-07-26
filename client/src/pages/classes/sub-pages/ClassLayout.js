import React from "react";
import { Query } from "react-apollo";
import { GET_CLASS_QUERY } from "../../../qql/ClassParams";

const ClassLayout = ({ id, component: Component, setEdit }) => (
  <Query query={GET_CLASS_QUERY} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      const { class: cls, ...rest } = data;
      return <Component data={cls} {...rest} setEdit={setEdit} />;
    }}
  </Query>
);

export default ClassLayout;
