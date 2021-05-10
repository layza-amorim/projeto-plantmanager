import React, { useEffect } from 'react';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';
import { PlantProps } from './src/libs/storage';
import AppLoading from 'expo-app-loading';
import Routes from './src/routes';
import * as Notifications from 'expo-notifications';

export default function App() {
  const [fontsLeaded] = useFonts({ Jost_400Regular, Jost_600SemiBold });

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(async notification => {
      const data = notification.request.content.data.plant as PlantProps;
      console.log(data);
    });
    return () => subscription.remove();
  }, []);

  if (!fontsLeaded) return <AppLoading />;

  return <Routes />;
}
