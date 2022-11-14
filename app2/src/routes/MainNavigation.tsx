import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigatorScreenParams } from '@react-navigation/native';
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

const Stack = createStackNavigator<MainNavigation>();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="App2"
          component={() => (
            <Stack.Navigator initialRouteName="Feed">
              <Stack.Screen name="Feed" component={Feed} />
              <Stack.Screen name="Message" component={Messages} />
            </Stack.Navigator>
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
