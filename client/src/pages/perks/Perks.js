import React from "react";
import { Query } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_ALL_PERKS_QUERY } from "../../qql/PerkQuery";

const Perks = () => (
  <Query query={GET_ALL_PERKS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return (
        <div className="d-flex flex-wrap">
          {/* {data.perks.map((el) => (
            <li>
              <Link to={`perks/${el.id}`}>{el.title}</Link>{" "}
            </li>
          ))} */}
        </div>
      );
    }}
  </Query>
);

export default Perks;
