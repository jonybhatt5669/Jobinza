import '../global.css';

import {
  Montserrat_300Light as MontSerratLight,
  Montserrat_400Regular as MontSerratRegular,
  Montserrat_500Medium as MontSerratMedium,
  Montserrat_600SemiBold as MontSerratSemiBold,
  Montserrat_700Bold as MontSerratBold,
  Montserrat_800ExtraBold as MontSerratExtraBold,
  Montserrat_900Black as MontSerratBlack,
} from '@expo-google-fonts/montserrat';
import { Risque_400Regular as Risque, useFonts } from '@expo-google-fonts/risque';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
SplashScreen.preventAutoHideAsync();
export default function Layout() {
  const [loaded, error] = useFonts({
    Risque,
    MontSerratLight,
    MontSerratBlack,
    MontSerratBold,
    MontSerratExtraBold,
    MontSerratMedium,
    MontSerratRegular,
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(auth)" />
    </Stack>
  );
}
