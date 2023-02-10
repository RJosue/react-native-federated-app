import React, { useCallback } from 'react';
import { ActivityIndicator, StyleProp, View, ViewStyle } from 'react-native';
import { Federated } from '@callstack/repack/client';
import {
  // CardStyleInterpolators,
  StackNavigationOptions,
} from '@react-navigation/stack';
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

import {
  Dashboard,
  RefundWelcome,
  RefundStepTwo,
  RefundStepThree,
} from '../screens';
import { colors } from '../theme';

type Module1Stack = {
  Page1: undefined;
  Page2: undefined;
};

type App2Stack = {
  Feed: undefined;
  Message: undefined;
  Dashboard: undefined;
  RefundWelcome: undefined;
  RefundStepTwo: undefined;
  RefundStepThree: undefined;
  Module1: NavigatorScreenParams<Module1Stack>;
};

export type MainNavigation = {
  Host: undefined;
  App1: undefined;
  App2: NavigatorScreenParams<App2Stack>;
} & App2Stack;

type StackType = TypedNavigator<
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

const Module1 = React.lazy(() =>
  Federated.importModule('module1', './Module1'),
);

const style: StyleProp<ViewStyle> = {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 20,
};

const MainNavigation = ({ Stack }: { Stack: StackType }) => {
  const Module1Wrapper = useCallback(() => {
    console.log('Module1Wrapper');
    return (
      <React.Suspense
        fallback={
          <View style={style}>
            <ActivityIndicator size="small" />
          </View>
        }>
        <Module1 Stack={Stack} />
      </React.Suspense>
    );
  }, [Stack]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: colors.white,
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: colors.madison,
        },
        /**
         * Applies a global background to all screens.
         */
        cardStyle: {
          backgroundColor: colors.white,
        },
        /**
         * This forces the "sideways" navigation, regardless of operating
         * system
         */
        // cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        cardShadowEnabled: false,
      }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="RefundWelcome" component={RefundWelcome} />
      <Stack.Screen name="RefundStepTwo" component={RefundStepTwo} />
      <Stack.Screen name="RefundStepThree" component={RefundStepThree} />
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Message" component={Messages} />
      <Stack.Screen name="Module1" component={Module1Wrapper} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
