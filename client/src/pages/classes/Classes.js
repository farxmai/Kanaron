import React from "react";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import ClassIcon from "../../components/icons/ClassIcons";
import "./Classes.css";
import { GET_ALL_CLASSES_QUERY } from "../../qql/ClassParams";

const Classes = () => (
  <Query query={GET_ALL_CLASSES_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return (
        <div className="calss-cards-wrapper">
          {data.classes.map((a, i) => (
            <div className="calss-card">
              <Link to={`classes/${a.id}`}>
                <h3>
                  <ClassIcon id={i + 1} fullWidth={50} title={a.name} />
                  <b>{a.name}</b>
                </h3>
              </Link>
              <p>{a.description}</p>
            </div>
          ))}
        </div>
      );
    }}
  </Query>
);

export default Classes;
