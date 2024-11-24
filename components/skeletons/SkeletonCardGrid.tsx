import { SafeAreaView, FlatList, View } from "react-native";
import { useCallback, useRef } from "react";

import { CardGridStyles } from "@/shared/styles/component.styles";

interface SkeletonProps {
  columns: number;
}

export default function SkeletonCardGrid({columns}: SkeletonProps) {
  const flatListRef = useRef<FlatList<{number: number}> | null>(null);
  const array = Array.from({ length: 12 }, (_, index) => ({ number: index }));
  const keyExtractor = useCallback((item: {number: number}) => String(item.number), []);

  const renderItem = useCallback(() => (
    <View style={CardGridStyles.imageContainer}>
      <View style={{flex: 1, backgroundColor: '#d2d2d2'}}>
        <View style={CardGridStyles.image}></View></View>
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