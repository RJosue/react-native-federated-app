import { Federated } from '@callstack/repack/client';
import React from 'react';
import {
  ActivityIndicator,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScriptManager } from '@callstack/repack/client';

import HostApp from '../../HostApp';
import { MainStack } from '.';
import { createStackNavigator } from '@react-navigation/stack';
import linking from '../../firebase/deepLinking';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// const App2 = React.lazy(() =>
//   Federated.importModule('app2.index.bundle.js', './app2.index.bundle.js'),
// );
const App2 = React.lazy(async () => {
  const script = await ScriptManager.shared.loadScript('index.bundle');
  console.log(JSON.stringify(script));
  return { default: () => <Text>async</Text> };
});

const Tab = createBottomTabNavigator<MainStack>();
const Stack = createStackNavigator<MainStack>();

const style: StyleProp<ViewStyle> = {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 20,
  backgroundColor: '#FFF',
};

// function App1Wrapper() {
//   return (
//     <React.Suspense
//       fallback={
//         <View style={style}>
//           <ActivityIndicator size="small" />
//         </View>
//       }>
//       <App1 />
//     </React.Suspense>
//   );
// }

function App2Wrapper() {
  return (
    <SafeAreaProvider>
      <React.Suspense
        fallback={
          <View style={style}>
            <ActivityIndicator size="small" />
          </View>
        }>
        <App2 />
      </React.Suspense>
    </SafeAreaProvider>
  );
}

const HostNavigationContainer = () => {
  return (
    <NavigationContainer linking={linking}>
      <Tab.Navigator
        initialRouteName="Host"
        screenOptions={{
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            backgroundColor: '#FFF',
          },
        }}>
        <Tab.Screen name="Host" component={HostApp} />
        {/* <Tab.Screen name="App1" component={App1Wrapper} /> */}
        <Tab.Screen
          name="App2"
          options={{ headerShown: false }}
          component={App2Wrapper}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default HostNavigationContainer;
