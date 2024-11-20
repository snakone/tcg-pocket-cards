
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import BackgroundMusic from '@/components/shared/BackgroundMusic';
import { FONT_REGULAR } from '@/shared/definitions/sentences/path.sentences';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Platform } from 'react-native';
import { webStyles } from '@/shared/styles/component.styles';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({SpaceMono: FONT_REGULAR});

  useEffect(() => {
    if (loaded) { SplashScreen.hideAsync() }
  }, [loaded]);

  if (!loaded) { return null; }

  return (
    <GestureHandlerRootView style={Platform.OS === 'web' ? webStyles.view : { flex: 1 }}>
      <ThemeProvider value={DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="light" hidden={true} />
        <BackgroundMusic></BackgroundMusic>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
