import { SafeAreaView, FlatList, View } from "react-native";
import { useCallback, useRef } from "react";

import { CardGridStyles } from "@/shared/styles/component.styles";
import { Colors } from "@/shared/definitions/utils/colors";

interface SkeletonProps {
  columns: number;
}

export default function SkeletonCardGrid({columns}: SkeletonProps) {
  const flatListRef = useRef<FlatList<{id: number}> | null>(null);
  const array = Array.from({ length: 12 }, (_, index) => ({ id: index }));
  const keyExtractor = useCallback((item: {id: number}) => String(item.id), []);

  const renderItem = useCallback(() => (
    <View style={CardGridStyles.imageContainer}>
      <View style={{flex: 1, backgroundColor: Colors.light.skeleton}}>
        <View style={CardGridStyles.image}></View>
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