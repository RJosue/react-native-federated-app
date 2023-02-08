import React, { useCallback } from 'react';
import {
  StackHeaderProps,
  createStackNavigator,
} from '@react-navigation/stack';
import {
  NavigatorScreenParams,
  NavigationContainer,
} from '@react-navigation/native';
import Feed from '../Feed';
import Messages from '../Message';

import {
  Dashboard,
  RefundWelcome,
  RefundStepTwo,
  RefundStepThree,
} from '../screens';
import { colors } from '../theme';
import AssistantHeader from '../components/AssistantHeader';

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

const LocalMainNavigation = () => {
  const LocalStack = createStackNavigator<MainNavigation>();

  const navigationStack = useCallback(
    () => (
      <LocalStack.Navigator>
        <LocalStack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            header: ({ navigation }: StackHeaderProps) => (
              <AssistantHeader showMenu navigation={navigation} />
            ),
          }}
        />
        <LocalStack.Screen
          name="RefundWelcome"
          component={RefundWelcome}
          options={{
            headerShown: false,
            header: () => {}
          }}
        />
        <LocalStack.Screen
          name="RefundStepTwo"
          component={RefundStepTwo}
          options={{
            headerShown: false,
          }}
        />
        <LocalStack.Screen
          name="RefundStepThree"
          component={RefundStepThree}
          options={{
            header: ({ navigation }: StackHeaderProps) => (
              <AssistantHeader navigation={navigation} />
            ),
          }}
        />
        <LocalStack.Screen name="Feed" component={Feed} />
        <LocalStack.Screen name="Message" component={Messages} />
      </LocalStack.Navigator>
    ),
    [LocalStack],
  );

  return (
    <NavigationContainer>
      <LocalStack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: colors.white,
          },
        }}>
        <LocalStack.Screen
          name="App2"
          options={{ headerShown: false }}
          component={navigationStack}
        />
      </LocalStack.Navigator>
    </NavigationContainer>
  );
};

export default LocalMainNavigation;
