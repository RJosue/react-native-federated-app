import { AppRegistry, Platform } from 'react-native';
import { ScriptManager, Script, Federated } from '@callstack/repack/client';
import App from './App';
import { name as appName } from './app.json';

// const localUrl = {
//   app1: 'http://localhost:9000/[name][ext]',
//   app2: `http://localhost:9001/${Platform.OS}/[name][ext]`,
//   module1: 'http://localhost:9002/[name][ext]',
// };

// const remoteUrl = {
//   app1: `https://super-app-federation.s3.us-east-2.amazonaws.com/app1/${Platform.OS}/[name][ext]`,
//   app2: `https://super-app-federation.s3.us-east-2.amazonaws.com/app2/${Platform.OS}/[name][ext]`,
//   module1: `https://super-app-federation.s3.us-east-2.amazonaws.com/module1/${Platform.OS}/[name][ext]`,
// };

// const resolveURL = Federated.createURLResolver({
//   containers: __DEV__ ? localUrl : remoteUrl,
// });

ScriptManager.shared.on('loading', (loading) => {
  console.log({ loading });
});
ScriptManager.shared.on('loaded', (scriptLoaded) => {
  console.log({ scriptLoaded });
});

ScriptManager.shared.addResolver(async (scriptId, caller) => {
  // console.log({ scriptId, caller });
  let url;
  if (caller === 'main') {
    url = Script.getDevServerURL(scriptId);
  } else {
    console.log(`http://localhost:9001/${Platform.OS}/${scriptId}`);
    url = Script.getRemoteURL(
      `http://localhost:9001/${Platform.OS}/${scriptId}`,
      { excludeExtension: true },
    );
  }

  if (!url) {
    return undefined;
  }

  return {
    url,
    // cache: __DEV__ ? false : true, // For development
    // query: {
    //   platform: Platform.OS,
    // },
  };
});

AppRegistry.registerComponent(appName, () => App);
