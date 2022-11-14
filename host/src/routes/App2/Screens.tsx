import React from 'react';
import { Text } from 'react-native';
import { Federated } from '@callstack/repack/client';
import { NavigationContext } from '@react-navigation/native';

const FeedModule = React.lazy(() => Federated.importModule('app2', './Feed'));
const MessageModule = React.lazy(() =>
  Federated.importModule('app2', './Message'),
);

const Loading = () => <Text style={{ textAlign: 'center' }}>Loading...</Text>;

const Feed = () => {
  const navigation = React.useContext(NavigationContext);
  return (
    <React.Suspense fallback={<Loading />}>
      <FeedModule navigation={navigation} />
    </React.Suspense>
  );
};
const Message = () => {
  const navigation = React.useContext(NavigationContext);
  return (
    <React.Suspense fallback={<Loading />}>
      <MessageModule navigation={navigation} />
    </React.Suspense>
  );
};

export { Feed, Message };
