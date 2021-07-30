import { Link } from "react-router-dom";
import { GET_ALL_RACES_QUERY } from "qql/RaceQuery";
import { FlexWrapped } from "components/directions";
import { ImageCard } from "components/cards";
import QueryLayout from "components/layouts/QueryLayout";

const RacesComponent = ({ races }) => (
  <FlexWrapped>
    {races.map(({ id, title, imgLink }) => (
      <Link key={id} to={`races/${id}`}>
        <ImageCard title={title} src={imgLink} withTitle />
      </Link>
    ))}
  </FlexWrapped>
);

const Races = () => (
  <QueryLayout query={GET_ALL_RACES_QUERY} Component={RacesComponent} />
);

export default Races;
