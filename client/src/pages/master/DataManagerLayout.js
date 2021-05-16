import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import DataManager from "./DataManager";

const DataManagerLayout = ({ user }) => (
  <Query
    query={gql`
      query {
        races {
          id
          name
        }
        classes {
          id
          name
        }
        skills {
          id
          name
        }
        items {
          id
          name
          type
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      if (!data.races.length || !data.classes.length)
        return <p>Empty arrays returned</p>;
      return (
        <DataManager
          user={user}
          races={data.races}
          classes={data.classes}
          skills={data.skills}
          items={data.items}
        />
      );
    }}
  </Query>
);

export default DataManagerLayout;
