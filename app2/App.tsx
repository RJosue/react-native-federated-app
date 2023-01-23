import React from 'react';
import { StackNavigationOptions } from '@react-navigation/stack';
import {
  ParamListBase,
  TypedNavigator,
  StackNavigationState,
  DefaultNavigatorOptions,
  StackRouterOptions,
} from '@react-navigation/native';
import {
  StackNavigationConfig,
  StackNavigationEventMap,
} from '@react-navigation/stack/lib/typescript/src/types';
import MainNavigation, {
  MainNavigation as Navigation,
} from './src/routes/MainNavigation';
import { ApolloProvider } from '@apollo/client';
import { client } from './src/graphql';

const App = ({
  Stack,
}: {
  Stack: TypedNavigator<
    Navigation,
    StackNavigationState<ParamListBase>,
    StackNavigationOptions,
    StackNavigationEventMap,
    ({
      id,
      initialRouteName,
      children,
      screenListeners,
      screenOptions,
      ...rest
    }: DefaultNavigatorOptions<
      ParamListBase,
      StackNavigationState<ParamListBase>,
      StackNavigationOptions,
      StackNavigationEventMap
    > &
      StackRouterOptions &
      StackNavigationConfig) => JSX.Element
  >;
}) => {
  return (
    <ApolloProvider client={client}>
      <MainNavigation Stack={Stack} />
    </ApolloProvider>
  );
};

export default App;
