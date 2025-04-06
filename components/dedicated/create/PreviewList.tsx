import { FlatList, Animated, TextInput, Platform, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useCallback, useState } from "react";
import { Image } from 'expo-image';

import { useI18n } from "@/core/providers/LanguageProvider";

import { collectionStyles } from "@/app/screens/collection";
import { Card } from "@/shared/definitions/interfaces/card.interfaces";
import { CardGridStyles } from "@/shared/styles/component.styles";
import { Colors } from "@/shared/definitions/utils/colors";
import { LanguageType } from "@/shared/definitions/types/global.types";
import { BACKWARD_CARD } from "@/shared/definitions/sentences/path.sentences";
import { getImageLanguage69x96 } from "@/shared/definitions/utils/functions";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

interface PreviewListProps {
  handleSearch: (value: string) => void,
  styles: any,
  previousDeck: any[],
  onPreviewPress: (card: Card) => void
}

export default function PreviewList({
  handleSearch, 
  styles,
  previousDeck,
  onPreviewPress
}: PreviewListProps) {
  console.log('Preview List')
  const {i18n} = useI18n();
  const [lang] = useState<LanguageType>('en');

  const renderPreviewItem = useCallback(({item}: {item: Card}) => (
    <View style={[styles.previewItem, !item && {opacity: 0.8}]}>
      <TouchableOpacity
            onPress={() => onPreviewPress(item)}
            style={[{justifyContent: 'center', alignItems: 'center', flex: 1}]}>
        <View>
          { item ? 
          <ThemedView style={{backgroundColor: Colors.light.background}}>
            <ThemedView style={[collectionStyles.remove, {width: 13, height: 13}]}>
                <ThemedText style={[
                  {color: 'crimson', fontSize: 27, top: -4}, 
                  Platform.OS !== 'web' && {fontSize: 17, top: -9, transform: [{scale: 1.4}]}]}>-</ThemedText>
            </ThemedView>
            <Image accessibilityLabel={item?.name[lang]} 
                    style={[
              CardGridStyles.image, 
              {width: Platform.OS === 'web' ? 31.8 : 49.4, height: 46, borderRadius: 4}
            ]} 
            source={getImageLanguage69x96(lang, item?.id)}
            placeholder={BACKWARD_CARD}/>
          </ThemedView> : <MaterialIcons name="add" style={{fontSize: 16, color: Colors.light.icon}}></MaterialIcons>
          }
        </View>
      </TouchableOpacity>
    </View>
  ), []);
  
  return (
    <ThemedView style={{boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)'}}>
      <FlatList data={previousDeck}
                numColumns={10}
                contentContainerStyle={{width: '100%', padding: 16, paddingTop: 20, paddingBottom: 14}}
                renderItem={renderPreviewItem}
                keyExtractor={(item, index) => index + 1 + ''}
                showsVerticalScrollIndicator={false}
      />
      <ThemedView style={{padding: 16, paddingTop: 0, paddingBottom: 18}}>
        <Animated.View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <ThemedView style={{boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', width: '78%', borderRadius: 8}}>
            <TextInput style={[CardGridStyles.searchInput, {width: '100%'}]} 
                        placeholder={i18n.t('search_card_placeholder')}
                        placeholderTextColor={Colors.light.text}
                        accessibilityLabel={'SEARCH_LABEL'}
                        inputMode='text'
                        onChangeText={handleSearch}/>
          </ThemedView>

          <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', left: -2}}>
            <MaterialIcons name={'image'} style={{fontSize: 18, top: 1, color: Colors.light.skeleton}}></MaterialIcons>
            <ThemedText style={{fontSize: 13, width: 40, right: -6}}>{previousDeck.filter(d => Boolean(d)).length}/20</ThemedText>
          </ThemedView>
        </Animated.View>
      </ThemedView>
    </ThemedView>
  )
}