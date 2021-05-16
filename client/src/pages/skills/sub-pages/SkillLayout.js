import React from "react";
import { Query } from "react-apollo";
import { GET_SKILL_QUERY } from "../../../qql/SkillParams";

const SkillLayout = ({ id, component: Component, setEdit }) => (
  <Query query={GET_SKILL_QUERY} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return <Component data={data.skill} setEdit={setEdit} />;
    }}
  </Query>
);

export default SkillLayout;
