import { gql } from "@apollo/client";
import { MAIN_FIELDS } from "./Fragments";

export const GET_SELECTED_LISTS_QUERY = gql`
  query GetSelectedValues {    
    skills { ${MAIN_FIELDS} }
    spells { ${MAIN_FIELDS} }
    perks { ${MAIN_FIELDS} }
  }
`;

export const GET_SELECTED_LISTS_ITEMS_QUERY = gql`
  query GetSelectedValues {
    skills { ${MAIN_FIELDS} }
    spells { ${MAIN_FIELDS} }
    perks { ${MAIN_FIELDS} }
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
      color
    }
  }
`;
