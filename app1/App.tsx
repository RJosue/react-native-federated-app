/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, type PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ColorText } from './src';
import { ApolloProvider, gql, useQuery } from '@apollo/client';
import { client } from './src/graphql';

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

const query = gql`
  {
    policiesMedicalExpenses(clientCodeCore: "123") {
      clientCodeCore
    }
  }
`;

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const { loading, error, data, refetch } = useQuery(query, {
    fetchPolicy: 'no-cache',
  });

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    if (!loading) {
      console.log('app1', data);
    }
  }, [data, loading]);

  useEffect(() => {
    console.log(error);
  }, [error]);

  useEffect(() => {
    refetch();
  });

  useEffect(() => {
    console.log('demo');
  }, []);

  return (
    <ApolloProvider client={client}>
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
            <Section title="Application 1">
              Edit <Text style={styles.highlight}>Application 1</Text> to change
              this screen and then come back to see your edits.
            </Section>
            <ColorText />
            <ColorText text="Component text" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ApolloProvider>
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

export default App;
