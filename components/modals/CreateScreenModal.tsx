import { 
  Dimensions, 
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  TouchableOpacity,
  View
} from "react-native";

import { ThemedText } from "../ThemedText";
import { StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { useState } from "react";
import BounceArrow from "../ui/BounceArrow";
import { ThemedView } from "../ThemedView";
import { Colors } from "@/shared/definitions/utils/colors";
import { useI18n } from "@/core/providers/LanguageProvider";

export function CreateScreenModal() {
  const {i18n} = useI18n();
  const [activeIndex, setActiveIndex] = useState(0);
  const { width } = Dimensions.get('window');
  const size = ((width + 49) * 80) / 100;

  const data = [
    { id: '1', title: 'Item 1', image: 'https://via.placeholder.com/200' },
    { id: '2', title: 'Item 2', image: 'https://via.placeholder.com/200' },
    { id: '3', title: 'Item 3', image: 'https://via.placeholder.com/200' },
  ];

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.ceil(offsetX / size);
    setActiveIndex(index);
  };

  const renderItem = ({ item }: any) => (
    <View style={{flex: 1, width: size}}>
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <ThemedView style={{padding: 24, backgroundColor: 'white', width: '100%'}}>
          <ThemedText style={styles.text}>{item.title}</ThemedText>
          <ThemedText style={styles.text}>{item.title}</ThemedText>
          <ThemedText style={styles.text}>{item.title}</ThemedText>
        </ThemedView>
      </View>
    </View>
  );

  return (
    <ThemedText>
      {i18n.t('under_construction')}
    </ThemedText>
  )

  return (
    <>
    {activeIndex > 0 && (<BounceArrow direction="left" />)}
    {activeIndex < data.length - 1 && (<BounceArrow direction="right" />)}
      
      <SafeAreaView style={{margin: -16}}>
        <FlatList
          horizontal
          pagingEnabled={true}
          data={data}
          style={{flex: 1, width: '100%'}}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          onScroll={handleScroll}  // Usa este método
          scrollEventThrottle={2000}
        />
        
        <View style={{
          position: 'absolute',
          top: 226,
          flexDirection: 'row',
          justifyContent: 'center',
          width: '100%'
        }}>
          {data.map((_, index) => (
            <TouchableOpacity
              key={index}
              style={[
                {
                  width: 10,
                  height: 10,
                  backgroundColor: 'rgba(0, 0, 0, 0.2)',
                  marginInline: 3,
                  borderRadius: 8,
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.25)'
                },
                index === activeIndex && styles.active,
              ]}
            />
          ))}
        </View>
      </SafeAreaView>
    </>

  )
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    flex: 1,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 250,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.light.text
  },
  active: {
    backgroundColor: 'skyblue'
  }
});