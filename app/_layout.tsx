import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { createContext, useEffect, useMemo, useReducer } from 'react';
import 'react-native-reanimated';
import { Platform } from 'react-native';
import * as NavigationBar from "expo-navigation-bar";

import { rootReducer, initialRootState, AppState } from '@/hooks/root.reducer';
import BackgroundMusic from '@/components/shared/BackgroundMusic';
import { FONT_REGULAR } from '@/shared/definitions/sentences/path.sentences';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { WebStyles } from '@/shared/styles/component.styles';
import { I18nProvider } from '@/core/providers/LanguageProvider';
import { ErrorProvider } from '@/core/providers/ErrorProvider';
import { Provider } from 'react-native-paper';

export const AppContext = createContext<{ state: AppState; dispatch: React.Dispatch<any> } | undefined>(undefined);
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({SpaceMono: FONT_REGULAR});
  const [state, dispatch] = useReducer(rootReducer, initialRootState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
    if (Platform.OS !== 'web') NavigationBar.setVisibilityAsync("hidden");
  }, [loaded]);

  if (!loaded) { return null; }

  return (
    <Provider>
      <GestureHandlerRootView style={WebStyles.view}>
        <AppContext.Provider value={contextValue}>
          <ErrorProvider>
            <I18nProvider>
              <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="+not-found" />
              </Stack>
              <StatusBar hidden={true} />
              <BackgroundMusic/>      
            </I18nProvider>
          </ErrorProvider>
        </AppContext.Provider>
      </GestureHandlerRootView>
    </Provider>
  );
}
