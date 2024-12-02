import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { createContext, useEffect, useMemo, useReducer } from 'react';
import { Platform } from 'react-native';
import * as NavigationBar from "expo-navigation-bar";

import { rootReducer, initialRootState, AppState } from '@/hooks/root.reducer';
import BackgroundMusic from '@/components/shared/BackgroundMusic';
import { FONT_REGULAR } from '@/shared/definitions/sentences/path.sentences';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { WebStyles } from '@/shared/styles/component.styles';
import { I18nProvider, useI18n } from '@/core/providers/LanguageProvider';
import { ErrorProvider } from '@/core/providers/ErrorProvider';
import { Provider } from 'react-native-paper';
import Storage from '@/core/storage/storage.service';
import { APP_VERSION } from '@/shared/definitions/utils/contants';
import { SoundService } from '@/core/services/sounds.service';

export const AppContext = createContext<{ state: AppState; dispatch: React.Dispatch<any> } | undefined>(undefined);
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({SpaceMono: FONT_REGULAR});
  const [state, dispatch] = useReducer(rootReducer, initialRootState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  const { setLocale }  = useI18n();
  
  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();

    const android = async () => {
      if (Platform.OS !== 'web') {
        await NavigationBar.setVisibilityAsync("hidden");
        await NavigationBar.setBackgroundColorAsync('#00000000')
        await NavigationBar.setBehaviorAsync('overlay-swipe')
      };
    }

    android();
  }, [loaded]);

  useEffect(() => {
    const checkStorage = async () => {
      const version = await Storage.get('version');
      if (version === null) {
        Storage.setSettings({...state.settingsState, version: APP_VERSION});
        setLocale(state.settingsState.language);
      } else {
        const settings = await Storage.loadSettings();
        if (settings !== null) {
          dispatch({type: 'SET_SETTINGS', value: settings});
          SoundService.setEnabled(settings.sound)
          setLocale(settings.language);
        }
      }
    }

    checkStorage();
  }, []);

  useEffect(() => {
    SoundService.preloadAllSounds();
  }, []);

  if (!loaded) { return null; }

  return (
    <Provider>
      <GestureHandlerRootView style={Platform.OS === 'web' ? WebStyles.view : { flex: 1 }}>
        <AppContext.Provider value={contextValue}>
          <ErrorProvider>
            <I18nProvider>
              <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="+not-found" />
              </Stack>
              <StatusBar hidden={true} />
              <BackgroundMusic state={contextValue.state}/>      
            </I18nProvider>
          </ErrorProvider>
        </AppContext.Provider>
      </GestureHandlerRootView>
    </Provider>
  );
}
