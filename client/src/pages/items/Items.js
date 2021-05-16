import React from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import { GET_ALL_ITEMS_QUERY } from "../../qql/ItemParams";
import { itemTypesTranslate } from "../../components/translate/dictionary";

const Items = () => (
  <Query query={GET_ALL_ITEMS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      const byTypes = {};
      data.items.forEach((el) => {
        if (!byTypes[el.type]) byTypes[el.type] = [el];
        else byTypes[el.type].push(el);
      });

      return (
        <div className="d-flex flex-wrap">
          {itemTypesTranslate.map(({ eng, ru }) => (
            <ul className="col-6">
              <div className="mb-2">
                <b>{ru}</b>
              </div>
              {byTypes[eng]?.map((el) => (
                <li>
                  <Link to={`items/${el.id}`}>{el.name}</Link>{" "}
                </li>
              ))}
            </ul>
          ))}
        </div>
      );
    }}
  </Query>
);

export default Items;
