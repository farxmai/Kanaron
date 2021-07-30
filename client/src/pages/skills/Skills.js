import React from "react";
import { Query } from "@apollo/client";
import { Link } from "react-router-dom";
import { skillTypesTranslate } from "../../translate/dictionary";
import { GET_ALL_SKILLS_QUERY } from "../../qql/SkillQuery";

const Skills = () => (
  <Query query={GET_ALL_SKILLS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      const byTypes = {};
      data.skills.forEach((el) => {
        if (!byTypes[el.type]) byTypes[el.type] = [el];
        else byTypes[el.type].push(el);
      });

      return (
        <div className='d-flex flex-wrap'>
          {/* {skillTypesTranslate.map(({ eng, ru }) => (
            <ul className="col-6">
              <div className="mb-2">
                <b>{ru}</b>
              </div>
              {byTypes[eng]?.map((el) => (
                <li>
                  <Link to={`skills/${el.id}`}>{el.name}</Link>{" "}
                </li>
              ))}
            </ul>
          ))} */}
        </div>
      );
    }}
  </Query>
);

export default Skills;
