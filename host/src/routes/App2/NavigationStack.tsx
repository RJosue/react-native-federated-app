import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Feed, Message } from './Screens';
import Stack from './Stack';

const AppStack = createStackNavigator<Stack>();

const NavigationStack = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Feed" component={Feed} />
    <AppStack.Screen name="Message" component={Message} />
  </AppStack.Navigator>
);

export default NavigationStack;
