import React from "react";
import { Query } from "@apollo/client";
import Generator from "./Generator";
import Loader from "../../components/loader/Loader";
import { GET_GENERATOR_DATA_QUERY } from "../../qql/CharacterParams";
import { defEquipment } from "../../def-states";
import { itemTypesTranslate } from "../../translate/dictionary";

const itemsFilterByEquip = (items) => {
  const filteredItems = { ...defEquipment };
  items.forEach((el) => {
    if (el.type === "weapon") {
      filteredItems.weapon1.push(el);
      filteredItems.weapon2.push(el);
    }
    if (el.type === "armor" && el.armor.type !== "helmet") {
      filteredItems.armor.push(el);
    }
    if (el.type === "armor" && el.armor.type === "helmet") {
      filteredItems.helmet.push(el);
    }
    if (el.type === "necklace") {
      filteredItems.necklace.push(el);
    }
    if (el.type === "rings") {
      filteredItems.rings.push(el);
    }
    if (el.type === "accessories") {
      filteredItems.accessories.push(el);
    }
  });
  return filteredItems;
};

const itemsFilterByInventory = (items) => {
  const filtered = [...itemTypesTranslate];
  const findIndex = (t) => filtered.findIndex((el) => el.eng === t);
  items.forEach((el) => {
    const i = findIndex(el.type);
    filtered[i].items = [...filtered[i].items, el];
  });
  return filtered;
};

const GeneratorLayout = ({ user, character }) => (
  <Query query={GET_GENERATOR_DATA_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <Loader />;
      if (error) return <p>Error :(</p>;
      if (!data.races.length || !data.classes.length) return <p>Empty arrays returned</p>;
      return null;
      return (
        <Generator
          user={user}
          races={data.races}
          classes={data.classes}
          skills={data.skills}
          character={character || false}
          items={itemsFilterByEquip(data.items)}
          inventoryItems={itemsFilterByInventory(data.items)}
        />
      );
    }}
  </Query>
);

export default GeneratorLayout;
