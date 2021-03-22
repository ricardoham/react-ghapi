import { gql } from '@apollo/client';

export const REPOSITORY = gql`
  query REPOSITORY(
    $queryString: String!
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    search(
      query: $queryString
      type: REPOSITORY
      first: $first
      last: $last
      after: $after
      before: $before
    ) {
      nodes {
        ... on Repository {
          id
          name
          stargazerCount
          forkCount
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;
