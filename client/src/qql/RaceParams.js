import gql from "graphql-tag";

export const GET_ALL_RACES_QUERY = gql`
  query {
    races {
      id
      name
      imgLink
    }
  }
`;

export const GET_RACE_QUERY = gql`
  query GetRaceQuery($id: String!) {
    race(id: $id) {
      id
      name
      imgLink
      look
      lifeSpan
      description
      height
      culture
      attributes {
        Strength
        Agility
        Constitution
        Perception
        Intelligence
        Spirit
        Charisma
      }
      skills {
        id
        name
      }
    }
    skills {
      id
      name
      description
    }
  }
`;

export const UPDATE_RACE_MUTATION = gql`
  mutation CreateRaceMutation(
    $id: ID!
    $name: String
    $imgLink: String
    $look: String
    $lifeSpan: Int
    $description: String
    $height: Int
    $culture: String
    $attributes: AttributesMutation
    $skills: [String]
  ) {
    updateRace(
      id: $id
      name: $name
      imgLink: $imgLink
      look: $look
      lifeSpan: $lifeSpan
      description: $description
      height: $height
      culture: $culture
      attributes: $attributes
      skills: $skills
    ) {
      id
      name
    }
  }
`;

export const CREATE_RACE_MUTATION = gql`
  mutation CreateRaceMutation(
    $name: String!
    $imgLink: String!
    $look: String!
    $lifeSpan: Int!
    $description: String!
    $height: Int!
    $culture: String!
    $attributes: AttributesMutation!
    $skills: [String]
  ) {
    addRace(
      name: $name
      imgLink: $imgLink
      look: $look
      lifeSpan: $lifeSpan
      description: $description
      height: $height
      culture: $culture
      attributes: $attributes
      skills: $skills
    ) {
      id
      name
    }
  }
`;
