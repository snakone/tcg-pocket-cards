import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { Image } from 'expo-image';
import { FlatList, StyleSheet, View } from "react-native";
import { Subscription } from "rxjs";

import PocketNewsService from "@/core/services/news.service";
import { useI18n } from "@/core/providers/LanguageProvider";
import { useError } from "@/core/providers/ErrorProvider";

import { AppContext } from "../_layout";
import { NewsContent, PocketNews } from "@/shared/definitions/interfaces/global.interfaces";
import { formatDate } from "@/shared/definitions/utils/functions";
import { LanguageType } from "@/shared/definitions/types/global.types";

import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import SharedScreen from "@/components/shared/SharedScreen";
import LoadingOverlay from "@/components/ui/LoadingOverlay";
import { pocketNewsStyles } from "@/components/dedicated/news/NewsItem";

export default function NewsDetailScreen() {
  console.log('News Detail Screen')
  const {i18n} = useI18n();
  const context = useContext(AppContext);
  if (!context) { throw new Error('NO_CONTEXT'); }
  const { state, dispatch } = context;
  const { id } = useLocalSearchParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [pocketNew, setPocketNew] = useState<PocketNews | undefined>(undefined);
  const newsService = useMemo(() => new PocketNewsService(), []);
  const { show: showError } = useError();

  const loadPocketNews = useCallback(() => {
    const sub = newsService
      .getPocketNews()
      .subscribe({
        next: (res) => {
          dispatch({ type: 'SET_NEWS', value: res });
          setLoading(false);
        },
        error: (err) => {
          console.log(err);
          showError("error_get_cards");
          setLoading(false);
        }
      });

      return sub;
  }, []);

  useEffect(() => {
    let sub: Subscription;
    !state.pocketNewsState.loaded ? sub = loadPocketNews() : setLoading(false);

    return () => sub?.unsubscribe();
  }, [state.pocketNewsState.loaded]);

  useEffect(() => {
    if (id !== undefined) {
      const data = state.pocketNewsState.news.find(pocketNew => pocketNew._id === id);
      if (data) {
        setPocketNew(data);
        setLoading(false);
      }
    }
  }, [state.pocketNewsState.news]);

  const typeElement = (type: 'pocket' | 'game') => {
    return (
      <ThemedView style={[
        pocketNewsStyles.type,
        {backgroundColor: type === 'pocket' ? 'rgb(226, 22, 192)' : 'mediumaquamarine'}
        ]}>
        <ThemedText style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>
          {type === 'pocket' ? i18n.t('update') : i18n.t('official')}
          </ThemedText>
      </ThemedView>
    )
  }
  
  const renderContent = useCallback(({item}: {item: NewsContent}) => {
      switch (item.type) {
        case 'title':
          return <ThemedText style={[item.style, styles.item, {marginTop: 10}]}>
                    {item.value}
                  </ThemedText>;
        case 'text':
          return <ThemedText style={[item.style, {marginBottom: 16}]}>
                    {item.value}
                  </ThemedText>;
        case 'image':
          return <ThemedView style={styles.imageContainer}>
                  <Image source={item.value} style={[item.style, styles.image]} />
                </ThemedView>;
        default:
          return null;
      }
  }, []);

  return (
    <>
      { loading && <LoadingOverlay/> }
      <SharedScreen title={'newspaper'} styles={styles.screen}>
        {
          pocketNew && 
          <>
            <ThemedView style={[pocketNewsStyles.item, styles.content]}>
              <View>
                <Image source={{uri: pocketNew.image}} 
                                style={[
                                  pocketNewsStyles.image, 
                                  styles.animatedImage]} />
              </View>
              <ThemedView style={[pocketNewsStyles.info, styles.time]}>
                <ThemedView style={pocketNewsStyles.date}>
                  {typeElement(pocketNew.type)}
                  <ThemedText style={{fontSize: 13, top: 1}}>
                    {formatDate(pocketNew.date, i18n.locale as LanguageType)}
                    </ThemedText>
                </ThemedView>
                <ThemedText style={pocketNewsStyles.title}>
                  {(pocketNew.title as any)[i18n.locale]}
                </ThemedText>
              </ThemedView>

              <FlatList
                data={(pocketNew.content as any)[i18n.locale]}
                renderItem={renderContent}
                keyExtractor={(item, index) => `${item.type}-${index}`}
                contentContainerStyle={{paddingHorizontal: 20}}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={24}
                ListFooterComponent={
                  <ThemedView style={{height: 75}}></ThemedView>
                }
              />
            </ThemedView>
          </>
        }
      </SharedScreen>
    </>
  )
}

const styles = StyleSheet.create({
  item: {
    fontSize: 16, 
    marginBottom: 20, 
    fontWeight: 600
  },
  imageContainer: {
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)', 
    marginTop: 10, 
    marginBottom: 30
  },
  image: {
    width: '100%', 
    height: 250, 
    objectFit: 'cover'
  },
  screen: {
    paddingInline: 0, 
    gap: 0, 
    marginTop: 0,
    paddingBottom: 0
  },
  content: {
    borderRadius: 0, 
    flex: 1, 
    width: '100%', 
    top: -20, 
    boxShadow: 'none', 
    marginBottom: 0
  },
  animatedImage: {
    borderTopLeftRadius: 0, 
    borderTopRightRadius: 0
  },
  time: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginTop: 10
  }
});