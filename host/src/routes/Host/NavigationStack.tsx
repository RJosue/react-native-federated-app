import { Federated } from '@callstack/repack/client';
import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HostApp from '../../HostApp';
import { MainStack } from '.';
import { createStackNavigator } from '@react-navigation/stack';
import linking from '../../firebase/deepLinking';

const App1 = React.lazy(() => Federated.importModule('app1', './App1'));
const App2 = React.lazy(() => Federated.importModule('app2', './App2'));

const Tab = createBottomTabNavigator<MainStack>();
const Stack = createStackNavigator<MainStack>();

function App1Wrapper() {
  return (
    <React.Suspense
      fallback={<Text style={{ textAlign: 'center' }}>Loading...</Text>}>
      <App1 />
    </React.Suspense>
  );
}

function App2Wrapper() {
  return (
    <React.Suspense
      fallback={<Text style={{ textAlign: 'center' }}>Loading...</Text>}>
      <App2 Stack={Stack} />
    </React.Suspense>
  );
}

const HostNavigationContainer = () => {
  return (
    <NavigationContainer linking={linking}>
      <Tab.Navigator initialRouteName="Host">
        <Tab.Screen name="Host" component={HostApp} />
        <Tab.Screen name="App1" component={App1Wrapper} />
        <Tab.Screen name="App2" component={App2Wrapper} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default HostNavigationContainer;
