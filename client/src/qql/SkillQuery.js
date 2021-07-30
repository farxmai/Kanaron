import { gql } from "@apollo/client";

export const GET_ALL_SKILLS_QUERY = gql`
  query GetSkills {
    skills {
      id
      title
      type
    }
  }
`;

export const GET_SKILL_QUERY = gql`
  query GetSkillQuery($id: String!) {
    skill(id: $id) {
      id
      title
      type
      description
      cost
    }
  }
`;

export const UPDATE_SKILL_MUTATION = gql`
  mutation CreateSkillMutation(
    $id: ID!
    $title: String!
    $type: String!
    $description: String!
    $cost: Int!
  ) {
    updateSkill(
      id: $id
      title: $title
      type: $type
      description: $description
      cost: $cost
    ) {
      id
    }
  }
`;

export const CREATE_SKILL_MUTATION = gql`
  mutation CreateSkillMutation(
    $title: String!
    $type: String!
    $description: String!
    $cost: Int!
  ) {
    addSkill(
      title: $title
      type: $type
      description: $description
      cost: $cost
    ) {
      id
    }
  }
`;
