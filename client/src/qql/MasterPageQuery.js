import { gql } from "@apollo/client";

export const GET_ALL_STAFF_QUERY = gql`
  query {
    races {
      id
      title
    }
    classes {
      id
      title
    }
    skills {
      id
      title
    }
    spells {
      id
      title
    }
    perks {
      id
      title
    }
    currentItems {
      id
      title
      item {
        type
        title
      }
      material {
        title
      }
      quality {
        title
        color
      }
    }
    items {
      id
      title
      type
    }
    materials {
      id
      type
      title
    }
    qualities {
      id
      title
    }
  }
`;
