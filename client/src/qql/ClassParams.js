import gql from "graphql-tag";

export const GET_ALL_CLASSES_QUERY = gql`
  query {
    classes {
      id
      name
      description
    }
  }
`;

export const GET_CLASS_QUERY = gql`
  query GetClassQuery($id: String!) {
    class(id: $id) {
      id
      name
      imgLink
      description
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

export const UPDATE_CLASS_MUTATION = gql`
  mutation CreateClassMutation(
    $id: ID!
    $name: String!
    $imgLink: String
    $description: String!
    $attributes: AttributesMutation!
    $skills: [String]
  ) {
    updateClass(
      id: $id
      name: $name
      imgLink: $imgLink
      description: $description
      attributes: $attributes
      skills: $skills
    ) {
      id
      name
    }
  }
`;

export const CREATE_CLASS_MUTATION = gql`
  mutation CreateClassMutation(
    $name: String!
    $imgLink: String
    $description: String!
    $attributes: AttributesMutation!
    $skills: [String]
  ) {
    addClass(
      name: $name
      imgLink: $imgLink
      description: $description
      attributes: $attributes
      skills: $skills
    ) {
      id
      name
    }
  }
`;
