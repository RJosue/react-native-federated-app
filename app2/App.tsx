import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Feed, Messages } from './src';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    console.log('APP2');
  }, []);

  return (
    <NavigationContainer independent>
      <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Messages" component={Messages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
