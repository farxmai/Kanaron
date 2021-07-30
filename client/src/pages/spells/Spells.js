import React from "react";
import { Query } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_ALL_SPELLS_QUERY } from "../../qql/SpellQuery";

const Spells = () => (
  <Query query={GET_ALL_SPELLS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return (
        <div className="d-flex flex-wrap">
          {/* {data.spells.map((el) => (
            <li>
              <Link to={`spells/${el.id}`}>{el.title}</Link>{" "}
            </li>
          ))} */}
        </div>
      );
    }}
  </Query>
);

export default Spells;
