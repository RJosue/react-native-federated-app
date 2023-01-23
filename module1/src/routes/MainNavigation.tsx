import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { StackNavigationOptions } from '@react-navigation/stack';
import {
  NavigatorScreenParams,
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
import Page1 from '../Page1';
import Page2 from '../Page2';

type Module1Stack = {
  Page1: undefined;
  Page2: undefined;
};

type App2Stack = {
  Feed: undefined;
  Message: undefined;
  Module1: NavigatorScreenParams<Module1Stack>;
};

export type MainNavigation = {
  Host: undefined;
  App1: undefined;
  App2: NavigatorScreenParams<App2Stack>;
} & App2Stack &
  Module1Stack;

const MainNavigation = ({
  Stack,
}: {
  Stack: TypedNavigator<
    MainNavigation,
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
    <Stack.Navigator initialRouteName="Page1">
      <Stack.Screen name="Page1" component={Page1} />
      <Stack.Screen name="Page2" component={Page2} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
