import { user } from "cache";

export const typePolicies = {
  Query: {
    fields: {
      user: {
        read() {
          return user();
        },
      },
    },
  },
};
