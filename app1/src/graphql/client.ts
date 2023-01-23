import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://nassak8sdev.assanet.com/health-gateway-ms/graphql',
  cache: new InMemoryCache(),
});
