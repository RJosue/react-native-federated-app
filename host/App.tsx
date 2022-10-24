import { Federated } from '@callstack/repack/client';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HostApp from './src/HostApp';
import { Text } from 'react-native';

const App1 = React.lazy(() => Federated.importModule('app1', './App1'));
const App2 = React.lazy(() => Federated.importModule('app2', './App2'));

const Tab = createBottomTabNavigator();

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
      <App2 />
    </React.Suspense>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Host">
        <Tab.Screen name="Host" component={HostApp} />
        <Tab.Screen name="App1" component={App1Wrapper} />
        <Tab.Screen name="App2" component={App2Wrapper} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
