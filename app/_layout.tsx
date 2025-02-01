import { useFonts } from 'expo-font';
import { Stack, useNavigation } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { createContext, useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import { Platform } from 'react-native';
import { Provider } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as NavigationBar from "expo-navigation-bar";
import { Subscription } from 'rxjs';

import { rootReducer, initialRootState, AppState } from '@/hooks/root.reducer';
import BackgroundMusic from '@/components/shared/BackgroundMusic';
import { BACKGROUND_MUSIC, FONT_REGULAR } from '@/shared/definitions/sentences/path.sentences';
import { WebStyles } from '@/shared/styles/component.styles';
import { I18nProvider, useI18n } from '@/core/providers/LanguageProvider';
import { ErrorProvider } from '@/core/providers/ErrorProvider';
import Storage from '@/core/storage/storage.service';
import { APP_VERSION } from '@/shared/definitions/utils/constants';
import { SoundService } from '@/core/services/sounds.service';
import { handleWebInit, forceShowSplash } from '@/shared/definitions/utils/functions';
import { ThemedView } from '@/components/ThemedView';
import LoadingOverlay from '@/components/ui/LoadingOverlay';
import { SplashScreenMemo } from '@/components/ui/SplashScreen';
import { ConfirmationProvider } from '@/core/providers/ConfirmationProvider';
import CardsService from '@/core/services/cards.service';
import { Card } from '@/shared/definitions/interfaces/card.interfaces';

export const AppContext = createContext<{ state: AppState; dispatch: React.Dispatch<any> } | undefined>(undefined);
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({SpaceMono: FONT_REGULAR});
  const [state, dispatch] = useReducer(rootReducer, initialRootState);
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [shouldShowSplash, setShouldShowSplash] = useState(false);
  const [waiting, setWaiting] = useState(true);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  const { setLocale }  = useI18n();
  const navigation = useNavigation();
  const cardsService = new CardsService();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkStorage = async () => {
      const version = await Storage.get('version');
      if (version === null) {
        const settings = {...state.settingsState, version: APP_VERSION};
        dispatch({type: 'SET_SETTINGS', value: settings});
        setLocale(settings.language);
        Storage.setSettings(settings);
        loadCards();
      } else {
        const settings = await Storage.loadSettings();
        if (settings !== null) {
          dispatch({type: 'SET_SETTINGS', value: {...settings, version: APP_VERSION}});
          SoundService.setEnabled(settings.sound)
          setLocale(settings.language);
          setShowStartScreen(settings.show_intro);

          if (version !== APP_VERSION || settings.cards.length === 0) {
            Storage.set('version', APP_VERSION);
            Storage.set('cards', []);
            dispatch({type: 'RESET_CARDS'});
            loadCards();
          } 

          if (settings.cards.length !== 0) {
            dispatch({ type: 'SET_CARDS', value: settings.cards });
            setLoading(false);
          }
        }
      }
      setTimeout(() => setWaiting(false), 1500);
    }

    checkStorage();
  }, []);
  
  const loadCards = useCallback(() => {
    const sub = cardsService
      .getCards()
      .subscribe({
        next: (res) => {
          dispatch({ type: 'SET_CARDS', value: res });
          Storage.set('cards', res);
          setLoading(false);
        },
        error: (err) => {
          console.log(err);
          Storage.set('cards', []);
          setLoading(false);
        }
      });

      return sub;
  }, []);

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
      if (forceShowSplash((navigation as any))) {
        setShouldShowSplash(true);
      }
    });
  }, []);

  useEffect(() => {
    SoundService.preloadAllSounds();
  }, []);

  function handleStart(): void {
    SoundService.stop('SPLASH_MUSIC');
    setShowStartScreen(false);
    setShouldShowSplash(false);
    SoundService.play('CHANGE_VIEW');
  }

  if (!loaded || waiting || loading) { 
    return (
      <LoadingOverlay></LoadingOverlay>
    )
  }

  if (showStartScreen || shouldShowSplash) {
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
          <ConfirmationProvider>
            <ErrorProvider>
              <I18nProvider>
                <Stack screenOptions={{headerShown: false}}>
                  <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
                  <Stack.Screen name="+not-found" options={{ headerShown: false }}/>
                </Stack>
                <StatusBar hidden={true} />
                <BackgroundMusic state={contextValue.state} music={BACKGROUND_MUSIC}/>      
              </I18nProvider>
            </ErrorProvider>
          </ConfirmationProvider>
        </AppContext.Provider>
      </GestureHandlerRootView>
    </Provider>
  );
}
