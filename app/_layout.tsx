import { useFonts } from 'expo-font';
import { Stack, useNavigation } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { createContext, useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import { Platform } from 'react-native';
import { Provider } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as NavigationBar from "expo-navigation-bar";

import { DataRxjs } from '@/core/rxjs/DataRxjs';
import { rootReducer, initialRootState, AppState } from '@/hooks/root.reducer';
import { SettingsState } from '@/hooks/settings.reducer';
import { I18nProvider, useI18n } from '@/core/providers/LanguageProvider';
import { ErrorProvider } from '@/core/providers/ErrorProvider';
import Storage from '@/core/storage/storage.service';
import { SoundService } from '@/core/services/sounds.service';
import CardsService from '@/core/services/cards.service';
import { ConfirmationProvider } from '@/core/providers/ConfirmationProvider';

import { Card } from '@/shared/definitions/interfaces/card.interfaces';
import { WebStyles } from '@/shared/styles/component.styles';
import { UserData } from '@/shared/definitions/interfaces/global.interfaces';
import { BACKGROUND_MUSIC, FONT_REGULAR } from '@/shared/definitions/sentences/path.sentences';
import { handleWebInit, forceShowSplash } from '@/shared/definitions/utils/functions';
import { APP_VERSION, DEFAULT_PROFILE } from '@/shared/definitions/utils/constants';

import BackgroundMusic from '@/components/shared/BackgroundMusic';
import { ThemedView } from '@/components/ThemedView';
import LoadingOverlay from '@/components/ui/LoadingOverlay';
import { SplashScreenMemo } from '@/components/ui/SplashScreen';

export const AppContext = createContext<{ 
  state: AppState, 
  dispatch: React.Dispatch<any> 
} | undefined>(undefined);

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
    SoundService.preloadAllSounds();
  }, []);

  useEffect(() => {
    const checkStorage = async () => {
      const version = await Storage.get('version');
      if (version === null) {
        const settings = {...state.settingsState, version: APP_VERSION};
        dispatch({type: 'SET_SETTINGS', value: settings});
        setLocale(settings.language);
        Storage.setSettings(settings);
        Storage.setProfile({...DEFAULT_PROFILE})
        loadCards();
      } else {
        const {cards, settings, data} = await Storage.loadSettings();
        if (settings !== null) {
          checkMissingProps(data, settings);
          configure(settings);
          DataRxjs.setAllData(data);
          checkForData(version, cards);
          setTimeout(() => SoundService.setVolume(settings.sound_volume), 333);
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

  function checkMissingProps(data: UserData, settings: SettingsState): void {
    if (!data.trades) { data.trades = []; }
    if (!data.collection) { data.collection = []; }
  }

  function configure(settings: SettingsState): void {
    Storage.setSettings({...settings});
    SoundService.setEnabled(settings.sound);
    setLocale(settings.language);
    setShowStartScreen(settings.show_intro);
  }

  function checkForData(version: string, cards: Card[]): void {
    if (version !== APP_VERSION || cards.length === 0) {
      Storage.set('version', APP_VERSION);
      Storage.set('cards', []);
      dispatch({type: 'RESET_CARDS'});
      loadCards();
    } 

    if (cards.length !== 0) {
      dispatch({ type: 'SET_CARDS', value: cards });
      setLoading(false);
    }
  }

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
                <Stack screenOptions={{headerShown: false, animation: 'fade_from_bottom'}}>
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
