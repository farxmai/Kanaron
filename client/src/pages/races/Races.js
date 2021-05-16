import React from "react";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import { ImageCard } from "../../components/cards/ImageCard";
import { GET_ALL_RACES_QUERY } from "../../qql/RaceParams";
import "./Races.css";

const Races = () => (
  <Query query={GET_ALL_RACES_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return (
        <div className="cards-wrapper">
          {data.races.map((a) => (
            <Link to={`races/${a.id}`}>
              <ImageCard text={a.name} url={a.imgLink} />
            </Link>
          ))}
        </div>
      );
    }}
  </Query>
);

export default Races;
