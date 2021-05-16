import gql from "graphql-tag";

export const GET_ALL_SKILLS_QUERY = gql`
  query {
    skills {
      id
      name
      type
    }
  }
`;

export const GET_SKILL_QUERY = gql`
  query GetSkillQuery($id: String!) {
    skill(id: $id) {
      id
      name
      type
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
    }
  }
`;

export const UPDATE_SKILL_MUTATION = gql`
  mutation CreateSkillMutation(
    $id: ID!
    $name: String!
    $type: String!
    $description: String!
    $attributes: AttributesMutation!
  ) {
    updateSkill(
      id: $id
      name: $name
      type: $type
      description: $description
      attributes: $attributes
    ) {
      id
      name
    }
  }
`;

export const CREATE_SKILL_MUTATION = gql`
  mutation CreateSkillMutation(
    $name: String!
    $type: String!
    $description: String!
    $attributes: AttributesMutation!
  ) {
    addSkill(
      name: $name
      type: $type
      description: $description
      attributes: $attributes
    ) {
      id
      name
    }
  }
`;
