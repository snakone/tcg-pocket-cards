import { memo } from "react";
import { Platform, StatusBar, ImageBackground, Pressable, StyleSheet } from "react-native";
import { Image } from 'expo-image';

import { TCG_LOGO } from "@/shared/definitions/sentences/path.sentences";
import { WebStyles } from "@/shared/styles/component.styles";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { splashImage } from "./SplashImage";
import { useI18n } from "@/core/providers/LanguageProvider";
import React from "react";
import { APP_VERSION } from "@/shared/definitions/utils/contants";
import { Colors } from "@/shared/definitions/utils/colors";

export const SplashScreenMemo = memo(({handleStart}: {handleStart: () => void}) => {
  const {i18n} = useI18n();
  const splash = splashImage;
  
  return (
    <>
      <StatusBar hidden={true} />
      <ImageBackground source={splash} style={[
          Platform.OS === 'web' ? WebStyles.view : {flex: 1}, 
          {boxShadow: 'none'}
        ]}>
        <ThemedText style={splashStyles.version}>
          v{APP_VERSION}
        </ThemedText>
        <Image source={TCG_LOGO} style={splashStyles.logo} />
        <ThemedView style={splashStyles.container}>
          <Pressable
            onPress={handleStart}
            style={[splashStyles.button, {width: 120}]}>
            <ThemedText style={splashStyles.text}>
              {i18n.t('enter')}
            </ThemedText>
          </Pressable>
        </ThemedView>
      </ImageBackground>  
    </>
  );
});

export const splashStyles = StyleSheet.create({
  logo: {
    width: 300, 
    height: 200, 
    marginInline: 'auto', 
    marginTop: 40
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 40
  },
  text: {
    fontSize: 18, 
    color: 'white', 
    position: 'relative', 
    top: -1,
    fontWeight: 600
  },
  button: {
    backgroundColor: 'mediumaquamarine',
    paddingVertical: 6,
    paddingHorizontal: 35,
    borderRadius: 30,
    height: 42,
    width: 150,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  version: {
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: 'black',
    padding: 4,
    borderRadius: 4,
    paddingHorizontal: 8,
    fontSize: 12,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
    opacity: 0.5,
    color: 'white'
  }
});