import { LinkingOptions } from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
import { Linking } from 'react-native';

const linking: LinkingOptions<any> = {
  prefixes: ['com.assanet.movil://'],
  getInitialURL: async (): Promise<string | undefined> => {
    console.log('getInitialURL');
    const initialData = await messaging().getInitialNotification();
    console.log({ initialData });

    if (initialData?.data?.deepLinking) {
      return initialData?.data?.deepLinking;
    }
    return undefined;
  },
  subscribe(listener) {
    console.log('subscribe');
    // Listen to incoming links from deep linking
    const linkingSubscription = Linking.addEventListener('url', (data) => {
      console.log({ data });

      const dataParse = data as { deepLinking?: string };
      if (dataParse?.deepLinking) {
        listener(dataParse?.deepLinking);
      }
    });

    messaging().onNotificationOpenedApp((message) => {
      console.log({ message });
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
              console.log({ data });
              return data;
            },
          },
        },
      },
    },
  },
};

export default linking;
