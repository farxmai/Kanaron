/* eslint-disable no-underscore-dangle */
import React from "react";
import { Query } from "react-apollo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { GET_USER_CHARACTERS_QUERY } from "../../qql/CharacterParams";
import Loader from "../../components/loader/Loader";
import "./Characters.css";

const Characters = (props) => (
  <Query query={GET_USER_CHARACTERS_QUERY} variables={{ id: props.user._id }}>
    {({ loading, error, data }) => {
      if (loading) return <Loader />;
      if (error) return <p>Error :(</p>;

      return (
        <>
          <div className="d-flex flex-row align-items-center justify-content-between">
            <h2>Ваши герои</h2>
            <h2>{data.characters.length}/6</h2>
          </div>
          <div className="chars-wrapper">
            {data.characters.map((char) => (
              <div className="char-wrapper">
                <Link
                  to={`/dashboard/characters/${char.id}`}
                  className="char-info"
                >
                  <div>
                    {char.name} - {char.race.name} {char.class.name}
                  </div>
                  <div>Ур: {char.lvl}</div>
                </Link>
              </div>
            ))}
            {data.characters.length < 6 && (
              <div className="char-wrapper">
                <Link to="/dashboard/characters/create" className="ml-3">
                  <FontAwesomeIcon icon={faPlus} /> Обречь очередного героя
                </Link>
              </div>
            )}
          </div>
        </>
      );
    }}
  </Query>
);

export default Characters;
