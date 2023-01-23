import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, {
  useEffect,
  type PropsWithChildren,
  useCallback,
  useState,
} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import messaging from '@react-native-firebase/messaging';
import { MainStack } from './routes';

import { gql, useQuery } from '@apollo/client';

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

export type HostScreenNavigationProp = StackNavigationProp<MainStack, 'Host'>;

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
  return;
}
const query = gql`
  {
    policiesMedicalExpenses(clientCodeCore: "123") {
      clientCodeCore
    }
  }
`;
const HostApp = () => {
  const [fbToken, setToken] = useState('***TOKEN***');
  const isDarkMode = useColorScheme() === 'dark';
  const { loading, error, data, refetch } = useQuery(query, {
    fetchPolicy: 'no-cache',
  });

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const navigation = useNavigation<HostScreenNavigationProp>();

  const logToken = useCallback(async () => {
    await requestUserPermission();
    const token = await messaging().getToken();
    console.log({ token });
    setToken(token);
  }, []);

  useEffect(() => {
    if (!loading) {
      console.log('host', data);
    }
  }, [data, loading]);

  useEffect(() => {
    console.log(error);
  }, [error]);

  useEffect(() => {
    logToken();
  }, [logToken]);

  useEffect(() => {
    refetch();
  });

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Host App">
            Edit <Text style={styles.highlight}>Host</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="Firebase Token" />
          <View style={{ paddingHorizontal: 20 }}>
            <TextInput value={fbToken} />
          </View>
          <Button
            title="Go to Host"
            onPress={() => navigation.navigate('Host')}
          />
          <Button
            title="Go to App1"
            onPress={() => navigation.navigate('App1')}
          />
          <Button
            title="Go to App2 Message"
            onPress={() => navigation.navigate('App2', { screen: 'Message' })}
          />
          <Button
            title="Go to App2 Feed"
            onPress={() => navigation.navigate('App2', { screen: 'Feed' })}
          />
          <Button title="Get Firebase Token" onPress={logToken} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default HostApp;
