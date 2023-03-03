import { LinkingOptions } from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
import { Linking } from 'react-native';

const linking: LinkingOptions<any> = {
  prefixes: ['com.assanet.movil://'],
  getInitialURL: async (): Promise<string | undefined> => {
    const initialData = await messaging().getInitialNotification();

    if (initialData?.data?.deepLinking) {
      return initialData?.data?.deepLinking;
    }
    return undefined;
  },
  subscribe(listener) {
    // Listen to incoming links from deep linking
    const linkingSubscription = Linking.addEventListener('url', (data) => {

      const dataParse = data as { deepLinking?: string };
      if (dataParse?.deepLinking) {
        listener(dataParse?.deepLinking);
      }
    });

    messaging().onNotificationOpenedApp((message) => {
      if (message && message.data) {
        listener(message?.data?.deepLinking);
      }
    });

    return () => {
      linkingSubscription.remove();
    };
  },
  config: {
    screens: {
      App2: {
        screens: {
          Message: {
            path: 'app2/message',
            parse: (data: any) => {
              return data;
            },
          },
        },
      },
    },
  },
};

export default linking;
