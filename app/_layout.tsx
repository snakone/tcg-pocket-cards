import { useFonts } from 'expo-font';
import { Stack, useNavigation } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { createContext, useEffect, useMemo, useReducer, useState } from 'react';
import { Platform, Pressable } from 'react-native';
import * as NavigationBar from "expo-navigation-bar";
import { ImageBackground, Image } from 'expo-image';

import { rootReducer, initialRootState, AppState } from '@/hooks/root.reducer';
import BackgroundMusic from '@/components/shared/BackgroundMusic';
import { BACKGROUND_MUSIC, FONT_REGULAR } from '@/shared/definitions/sentences/path.sentences';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { WebStyles } from '@/shared/styles/component.styles';
import { I18nProvider, useI18n } from '@/core/providers/LanguageProvider';
import { ErrorProvider } from '@/core/providers/ErrorProvider';
import { Provider } from 'react-native-paper';
import Storage from '@/core/storage/storage.service';
import { APP_VERSION } from '@/shared/definitions/utils/contants';
import { SoundService } from '@/core/services/sounds.service';
import { handleWebInit, isRouteComingFromSettings } from '@/shared/definitions/utils/functions';
import { ThemedView } from '@/components/ThemedView';
import LoadingOverlay from '@/components/ui/LoadingOverlay';
import { splashImage } from '@/components/ui/SplashImage';
import { SplashScreenMemo } from '@/components/ui/SplashScreen';

export const AppContext = createContext<{ state: AppState; dispatch: React.Dispatch<any> } | undefined>(undefined);
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({SpaceMono: FONT_REGULAR});
  const [state, dispatch] = useReducer(rootReducer, initialRootState);
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [comingFromSettings, setComingFromSettings] = useState(false);
  const [waiting, setWaiting] = useState(true);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  const { setLocale }  = useI18n();
  const splash = splashImage;
  const {i18n} = useI18n();
  const navigation = useNavigation();

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
    handleWebInit();
  }, []);

  useEffect(() => {
    navigation.addListener('state', (_) => {
      if (isRouteComingFromSettings((navigation as any))) {
        setComingFromSettings(true);
      }
    });
  }, []);

  useEffect(() => {
    const checkStorage = async () => {
      const version = await Storage.get('version');
      if (version === null) {
        const settings = {...state.settingsState, version: APP_VERSION};
        dispatch({type: 'SET_SETTINGS', value: settings});
        setLocale(settings.language);
        Storage.setSettings(settings);
      } else {
        const settings = await Storage.loadSettings();
        if (settings !== null) {
          dispatch({type: 'SET_SETTINGS', value: settings});
          SoundService.setEnabled(settings.sound)
          setLocale(settings.language);
          setShowStartScreen(settings.show_intro);
        }
      }
      setTimeout(() => setWaiting(false), 1500);
    }

    checkStorage();
  }, []);

  useEffect(() => {
    SoundService.preloadAllSounds();
  }, []);

  function handleStart(): void {
    SoundService.stop('SPLASH_MUSIC');
    setShowStartScreen(false);
    setComingFromSettings(false);
    SoundService.play('CHANGE_VIEW');
  }

  if (!loaded || waiting) { 
    return (
      <LoadingOverlay></LoadingOverlay>
    )
  }

  if (showStartScreen || comingFromSettings) {
    if (state.settingsState.music) {
      SoundService.play('SPLASH_MUSIC', true)
    }

    return (
      <ThemedView style={Platform.OS === 'web' ? WebStyles.view : { flex: 1 }}>
        <SplashScreenMemo handleStart={handleStart}></SplashScreenMemo>
      </ThemedView>
    )
  }

  return (
    <Provider>
      <GestureHandlerRootView style={Platform.OS === 'web' ? WebStyles.view : { flex: 1 }}>
        <AppContext.Provider value={contextValue}>
          <ErrorProvider>
            <I18nProvider>
              <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
                <Stack.Screen name="+not-found" options={{ headerShown: false }}/>
              </Stack>
              <StatusBar hidden={true} />
              <BackgroundMusic state={contextValue.state} music={BACKGROUND_MUSIC}/>      
            </I18nProvider>
          </ErrorProvider>
        </AppContext.Provider>
      </GestureHandlerRootView>
    </Provider>
  );
}
