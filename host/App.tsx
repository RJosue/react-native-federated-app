import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { HostNavigation } from './src/routes';
import { client } from './src/graphql';

const App = () => (
  <ApolloProvider client={client}>
    <HostNavigation />
  </ApolloProvider>
);

export default App;
