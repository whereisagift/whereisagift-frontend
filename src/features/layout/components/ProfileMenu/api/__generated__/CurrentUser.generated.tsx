import { gql } from "@apollo/client";

export type CurrentUserFragment = {
  __typename?: "User";
  id: string;
  photoUrl: string;
  lastName: string;
  firstName: string;
};

export const CurrentUserFragmentDoc = gql`
  fragment CurrentUser on User {
    id
    photoUrl
    lastName
    firstName
  }
`;
