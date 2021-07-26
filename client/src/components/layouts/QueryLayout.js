import React from "react";
import { Redirect } from "react-router-dom";
import { Query } from "react-apollo";
import Loader from "../loader/Loader";

const QueryLayout = ({ query, variables, Component, ...rest }) => (
  <Query query={query} variables={variables}>
    {({ loading, error, data }) => {
      if (loading) return <Loader />;
      if (error) return <Redirect to={"/404"} />;
      return <Component {...data} {...rest} />;
    }}
  </Query>
);

export default QueryLayout;
