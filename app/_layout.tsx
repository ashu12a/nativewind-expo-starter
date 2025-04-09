import '../global.css';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    'OpenSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-Medium': require('../assets/fonts/OpenSans-Medium.ttf'),
    'OpenSans-SemiBold': require('../assets/fonts/OpenSans-SemiBold.ttf'),
    'OpenSans-Bold': require('../assets/fonts/OpenSans-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }} onLayout={onLayoutRootView}>
        <StatusBar style="dark" backgroundColor="white" />
        <Stack>
          <Stack.Screen name="index" options={{ title: 'Splash', headerShown:false }} />
          <Stack.Screen name="(tabs)" options={{ title: 'Home', headerShown:false }} />
          <Stack.Screen name="product/[id]" options={{ title: 'index', headerShown:false }} />
          <Stack.Screen name="order/track" options={{ title: 'Track Order', headerShown:false }} />
          <Stack.Screen name="cart" options={{ title: 'Cart', headerShown:false }} />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}