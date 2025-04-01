import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { FlatList, RefreshControl, TouchableOpacity } from 'react-native';
import React from 'react';
import { Subscription } from 'rxjs';
import { useRouter } from 'expo-router';

import { useI18n } from '@/core/providers/LanguageProvider';
import PocketNewsService from '@/core/services/news.service';
import { useError } from '@/core/providers/ErrorProvider';
import SoundService from '@/core/services/sounds.service';

import { AppContext } from '../_layout';
import { LanguageType } from '@/shared/definitions/types/global.types';
import { BACKUP_HEIGHT } from '@/shared/definitions/utils/constants';
import { PocketNews } from '@/shared/definitions/interfaces/global.interfaces';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { NewsScreenModal } from '@/components/modals';
import NewsItem from '@/components/dedicated/news/NewsItem';
import LoadingOverlay from '@/components/ui/LoadingOverlay';

export default function NewsScreen() {
  console.log('News Screen')
  const {i18n} = useI18n();
  const context = useContext(AppContext);
  if (!context) { throw new Error('NO_CONTEXT'); }
  const { state, dispatch } = context;
  const [loading, setLoading] = useState(true);
  const newsService = useMemo(() => new PocketNewsService(), []);
  const { show: showError } = useError();
  const [refreshing, setRefreshing] = React.useState(false);
  const router = useRouter();

  const loadPocketNews = useCallback(() => {
    const sub = newsService
      .getPocketNews()
      .subscribe({
        next: (res) => {
          dispatch({ type: 'SET_NEWS', value: res });
          setLoading(false);
          setRefreshing(false);
        },
        error: (err) => {
          console.log(err);
          showError("error_get_cards");
          setLoading(false);
          setRefreshing(false);
        }
      });

      return sub;
  }, [dispatch]);

  useEffect(() => {
    let sub: Subscription;
    !state.pocketNewsState.loaded ? sub = loadPocketNews() : setLoading(false);

    return () => {
      if (sub) {
        sub.unsubscribe();
      }
    };
  }, []);

  const handleClick = useCallback((id: string): void => {
    SoundService.play('CHANGE_VIEW');
    router.push(`/screens/news_detail?id=${encodeURIComponent(id)}`);
  }, []);

  const renderItem = useCallback(({item}: {item: PocketNews}) => {
    return (
      <TouchableOpacity onPress={() => handleClick(item._id)}>
        <NewsItem pocketNew={item} 
                  language={i18n.locale as LanguageType} 
                  i18n={i18n}/>
      </TouchableOpacity>
    )
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    loadPocketNews();
  }, []);

  const getItemLayout = useCallback((_: any, index: number) => ({
    length: 241,
    offset: 241 * index,
    index, 
  }), []);
  
  return (
    <>
      { loading && <LoadingOverlay/> }
      <ParallaxScrollView title={"news"} 
                          modalTitle='news'
                          modalContent={<NewsScreenModal></NewsScreenModal>}
                          styles={{padding: 0, paddingInline: 0}}
                          modalHeight={BACKUP_HEIGHT}>
        <FlatList
          data={state.pocketNewsState.news}
          renderItem={renderItem}
          getItemLayout={getItemLayout}
          keyExtractor={(item) => item._id}
          showsVerticalScrollIndicator={false}
          initialNumToRender={6}
          maxToRenderPerBatch={6}
          windowSize={11}
          refreshControl={
            <RefreshControl refreshing={refreshing} 
                            onRefresh={onRefresh} 
                            progressBackgroundColor={'white'}/>
          }
          contentContainerStyle={{paddingHorizontal: 16, paddingTop: 2, paddingBottom: 4}}
        />
      </ParallaxScrollView>
    </>
  );
}