import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { HostNavigation } from './src/routes';
import { client } from './src/graphql';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => (
  <SafeAreaProvider>
    <ApolloProvider client={client}>
      <HostNavigation />
    </ApolloProvider>
  </SafeAreaProvider>
);

export default App;
