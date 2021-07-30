import { gql } from "@apollo/client";

export const GET_ALL_SPELLS_QUERY = gql`
  query {
    spells {
      id
      title
      type
    }
  }
`;

export const GET_SPELL_QUERY = gql`
  query GetSpellQuery($id: String!) {
    spell(id: $id) {
      id
      title
      type
      description
      family
      effect
      cost
      cast
      level
      concentration
      dice
      diceCount
    }
  }
`;

export const UPDATE_SPELL_MUTATION = gql`
  mutation UpdateSpellMutation(
    $id: ID!
    $title: String!
    $type: String
    $description: String
    $family: String
    $effect: String
    $cost: Int!
    $cast: Int
    $level: Int
    $concentration: Int
    $dice: Int
    $diceCount: Int
  ) {
    updateSpell(
      id: $id
      title: $title
      type: $type
      description: $description
      family: $family
      effect: $effect
      cost: $cost
      cast: $cast
      level: $level
      concentration: $concentration
      dice: $dice
      diceCount: $diceCount
    ) {
      id
      title
    }
  }
`;

export const CREATE_SPELL_MUTATION = gql`
  mutation CreateSpellMutation(
    $title: String!
    $type: String
    $description: String
    $family: String
    $effect: String
    $cost: Int!
    $cast: Int
    $level: Int
    $concentration: Int
    $dice: Int
    $diceCount: Int
  ) {
    addSpell(
      title: $title
      type: $type
      description: $description
      family: $family
      effect: $effect
      cost: $cost
      cast: $cast
      level: $level
      concentration: $concentration
      dice: $dice
      diceCount: $diceCount
    ) {
      id
      title
    }
  }
`;
