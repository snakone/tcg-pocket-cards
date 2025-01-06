import { useCallback } from 'react';
import { FlatList } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useI18n } from '@/core/providers/LanguageProvider';
import { NewsScreenModal } from '@/components/modals';
import NewsItem from '@/components/dedicated/news/NewsItem';
import { LanguageType } from '@/shared/definitions/types/global.types';
import { MOCK_NEWS } from '@/shared/definitions/utils/contants';
import { PocketNews } from '@/shared/definitions/interfaces/global.interfaces';

export default function NewsScreen() {
  const {i18n} = useI18n();
  const news = MOCK_NEWS;

  const renderItem = useCallback(({item}: {item: PocketNews}) => {
    return (
      <NewsItem pocketNew={item} 
                language={i18n.locale as LanguageType} 
                i18n={i18n}/>
    )
  }, []);
  
  return (
    <ParallaxScrollView title={"news"} 
                        modalTitle='news'
                        modalContent={NewsScreenModal()}
                        styles={{padding: 0}}>
      <FlatList
        data={news}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        initialNumToRender={3}
        windowSize={12}
        contentContainerStyle={{padding: 16, paddingTop: 2, paddingBottom: 4}}
      />
    </ParallaxScrollView>
  );
}