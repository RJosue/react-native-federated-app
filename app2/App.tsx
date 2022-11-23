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
  return <MainNavigation Stack={Stack} />;
};

export default App;
