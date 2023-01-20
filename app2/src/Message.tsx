import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState, type PropsWithChildren } from 'react';
import { Button, StyleSheet, Text, useColorScheme, View } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { MainNavigation } from './routes/MainNavigation';
import { answerCall, getAPNSToken } from '@nassa/video-call';

export type HostScreenNavigationProp = StackNavigationProp<
  MainNavigation,
  'Message'
>;
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

const Message = ({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) => {
  const [number, setNumber] = useState(0);
  const [apns, setApns] = useState('apns');

  const getApns = async () => {
    const app = await getAPNSToken();
    setApns(app);
  };

  return (
    <View>
      <Section title="Messages">
        Edit <Text style={styles.highlight}>Messages App 2</Text> to change this
        screen and then come back to see your edits.
      </Section>

      <Text style={styles.highlight}>Number: {number}</Text>
      <Text style={styles.highlight}>Apns: {apns}</Text>

      <Button title="Go to Host" onPress={() => navigation.navigate('Host')} />
      <Button title="Go to App1" onPress={() => navigation.navigate('App1')} />
      <Button
        title="Go to App2 Message"
        onPress={() => navigation.navigate('App2', { screen: 'Message' })}
      />
      <Button
        title="Go to App2 Feed"
        onPress={() => navigation.navigate('App2', { screen: 'Feed' })}
      />
      <Button
        title="Update number"
        onPress={() => {
          let i = number + 1;
          setNumber(i);
        }}
      />
      <Button title="getAPNS" onPress={getApns} />
      <Button
        title="Video Call"
        onPress={() => {
          answerCall('', '', '');
        }}
      />
    </View>
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

export default Message;
