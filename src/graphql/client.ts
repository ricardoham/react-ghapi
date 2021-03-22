import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `Bearer 365f1c1ae938912fd77a34cc4dad37fbcde762cf`,
  },
  cache: new InMemoryCache(),
});
