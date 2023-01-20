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
import Feed from '../Feed';
import Messages from '../Message';

type App2Stack = {
  Feed: undefined;
  Message: undefined;
};

export type MainNavigation = {
  Host: undefined;
  App1: undefined;
  App2: NavigatorScreenParams<App2Stack>;
} & App2Stack;

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
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Message" component={Messages} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
