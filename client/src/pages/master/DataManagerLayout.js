import React from "react";
import { Query } from "react-apollo";
import DataManager from "./DataManager";
import { GET_ALL_STAFF_QUERY } from "../../qql/MasterPageQuery";

const DataManagerLayout = ({ user }) => (
  <Query query={GET_ALL_STAFF_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return <DataManager user={user} {...data} />;
    }}
  </Query>
);

export default DataManagerLayout;
