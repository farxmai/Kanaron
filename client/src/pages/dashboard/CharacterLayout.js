import React, { useState } from "react";
import { Query } from "react-apollo";
import { withRouter } from "react-router";
import { GET_CHARACTER_QUERY } from "../../qql/CharacterParams";
import Loader from "../../components/loader/Loader";
import GeneratorLayout from "../generator/GeneratorLayout";
import CharacterView from "./CharacterView";

const CharacterLayout = (props) => {
  const [edit, setEdit] = useState(true);
  const { id } = props.match.params;
  return (
    <Query query={GET_CHARACTER_QUERY} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return <Loader />;
        if (error) return <p>Error :(</p>;
        return edit ? (
          <GeneratorLayout
            character={data.character}
            setEdit={setEdit}
            user={props.user}
          />
        ) : (
          <CharacterView
            character={data.character}
            setEdit={setEdit}
            user={props.user}
          />
        );
      }}
    </Query>
  );
};

export default withRouter(CharacterLayout);
