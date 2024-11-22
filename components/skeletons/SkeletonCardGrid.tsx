import { SafeAreaView, FlatList, View } from "react-native";
import { useCallback, useRef } from "react";

import { CARD_IMAGE_WIDTH, CardGridStyles } from "@/shared/styles/component.styles";
import { ThemedText } from "../ThemedText";

interface SkeletonProps {
  columns: number;
}

export default function SkeletonCardGrid({columns}: SkeletonProps) {
  const flatListRef = useRef<FlatList<{number: number}> | null>(null);
  const array = Array.from({ length: 12 }, (_, index) => ({ number: index }));
  const keyExtractor = useCallback((item: {number: number}) => String(item.number), []);

  const renderItem = useCallback(() => (
    <View style={CardGridStyles.imageContainer}>
      <View style={{flex: 1, backgroundColor: '#C1C1C1'}}>
        <View style={CardGridStyles.image}></View>
        <ThemedText numberOfLines={1} style={
          [CardGridStyles.imageTitle, 
          { width: CARD_IMAGE_WIDTH, color: 'white', backgroundColor: 'white', flex: 1 }]}>Skeleton
        </ThemedText>
      </View>
    </View>

  ), []);
  
  return (
    <SafeAreaView style={CardGridStyles.container}>
      <FlatList
        data={array}
        ref={flatListRef}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={columns}
        contentContainerStyle={CardGridStyles.gridContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}