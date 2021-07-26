import React from "react";
import { Link } from "react-router-dom";
import { ImageCard } from "../../components/cards/ImageCard";
import { GET_ALL_RACES_QUERY } from "../../qql/RaceParams";

import QueryLayout from "../../components/layouts/QueryLayout";
import { FlexWrapped } from "../../components/directions/directions";

const RacesComponent = ({ races }) => (
  <FlexWrapped>
    {races.map((a) => (
      <Link to={`races/${a.id}`}>
        <ImageCard text={a.title} url={a.imgLink} />
      </Link>
    ))}
  </FlexWrapped>
);

const Races = () => (
  <QueryLayout query={GET_ALL_RACES_QUERY} Component={RacesComponent} />
);

export default Races;
