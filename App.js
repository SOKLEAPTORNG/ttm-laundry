import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Notifee, {
  AndroidImportance,
  AndroidVisibility,
} from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
import AppContainer from './src';
import {store, persistedStore} from './src/Store';
import AppSplashScreen from './src/Screen/AppSplashScreen';

const handleForegroundMessage = async remoteMessage => {
  try {
    const {title, body} = remoteMessage.data;

    const channelId = await Notifee.createChannel({
      id: 'default',
      name: 'default',
      importance: AndroidImportance.HIGH,
    });

    await Notifee.displayNotification({
      title,
      body,
      android: {
        channelId,
        importance: AndroidImportance.HIGH,
      },
    });
  } catch (error) {
    console.error('Foreground Notification Error', error);
  }
};

const App = () => {
  const [isSplashVisible, setSplashVisible] = useState(true);

  if (__DEV__) {
    const ignoreWarns = [
      'VirtualizedLists should never be nested inside plain ScrollViews',
    ];

    const errorWarn = global.console.error;
    global.console.error = (...arg) => {
      for (const error of ignoreWarns) {
        if (arg[0].startsWith(error)) {
          return;
        }
      }
      errorWarn(...arg);
    };
  }

  useEffect(() => {
    const setupNotifications = async () => {
      try {
        await Notifee.requestPermission();
      } catch (error) {
        console.error('Request iOS Notification Permission Error: ', error);
      }

      const unsubscribeForeground = messaging().onMessage(
        handleForegroundMessage,
      );

      SplashScreen.hide();

      setTimeout(() => {
        setSplashVisible(false);
      }, 2500);

      return () => {
        unsubscribeForeground();
      };
    };

    setupNotifications();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        {isSplashVisible ? <AppSplashScreen /> : <AppContainer />}
      </PersistGate>
    </Provider>
  );
};

export default App;
