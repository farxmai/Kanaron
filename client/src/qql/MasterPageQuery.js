import gql from "graphql-tag";

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
      item {
        title
      }
      material {
        title
      }
      quality {
        title
      }
    }
    items {
      id
      title
      type
    }
    materials {
      id
      title
    }
    qualities {
      id
      title
    }
  }
`;