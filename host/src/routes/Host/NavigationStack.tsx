import { Federated } from '@callstack/repack/client';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HostApp from '../../HostApp';
import { Text } from 'react-native';
import { App2NavigationStack } from '../App2';
import { MainStack } from '.';

const App1 = React.lazy(() => Federated.importModule('app1', './App1'));

const Tab = createBottomTabNavigator<MainStack>();

function App1Wrapper() {
  return (
    <React.Suspense
      fallback={<Text style={{ textAlign: 'center' }}>Loading...</Text>}>
      <App1 />
    </React.Suspense>
  );
}

const HostNavigationContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Host">
        <Tab.Screen name="Host" component={HostApp} />
        <Tab.Screen name="App1" component={App1Wrapper} />
        <Tab.Screen name="App2" component={App2NavigationStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default HostNavigationContainer;
