import { BlurView } from "expo-blur";
import { FlatList, Platform, Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import Animated from 'react-native-reanimated'
import { useEffect, useCallback, useState, useContext } from "react";

import { SortItem, TabMenu } from "@/shared/definitions/interfaces/layout.interfaces";
import { ButtonStyles, LayoutStyles, ModalStyles, sortStyles } from "@/shared/styles/component.styles";
import { CLOSE_SENTENCE, NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { MaterialIcons } from "@expo/vector-icons";
import { useI18n } from "../../../core/providers/LanguageProvider";
import { AppContext } from "@/app/_layout";
import { INITIAL_SORT_DATA } from "@/shared/definitions/utils/contants";
import { cardStyles } from "@/app/(tabs)/cards";
import SoundService from "@/core/services/sounds.service";
import React from "react";

export default function SortCardMenu({
  isVisible,
  onClose,
  animatedStyle,
}: TabMenu) {
  const [data, setData] = useState(INITIAL_SORT_DATA);
  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;
  const {i18n} = useI18n();
  const styles = ModalStyles;
  if (!isVisible) return null;

  const playSound = useCallback(async () => {
    await SoundService.play('AUDIO_MENU_CLOSE')
  }, []);

  async function closeMenu(): Promise<void> {
    await playSound();
    onClose();
  }

  const toggleActive = async (id: number) => {
    await closeMenu();
    const updated: SortItem[] = data.map((item) =>
      item.id === id
        ? { ...item, active: true, order: item.order === 'asc' ? 'desc' : 'asc' }
        : { ...item, active: false }
    );
  
    setData(updated);
    dispatch({ type: 'SET_SORT', value: updated });
  };

  useEffect(() => {
    if (state.filterState.sort.length > 0) {
      const active = [...state.filterState.sort];
      setData(active);
    }
  }, [state.filterState.sort])

  const getOrderIcon = useCallback((item: SortItem) => {
    return !item?.order ? 'arrow-upward' : 
              item.order === 'asc' ? 'arrow-upward' : 'arrow-downward';
  }, [state.filterState.sort]);

  const renderItem = ({ item } : any) => (
    <TouchableOpacity onPress={() => toggleActive(item.id)} style={sortStyles.itemContainer}>
      <ThemedView style={[sortStyles.item, item.active && sortStyles.activeItem]}>
        <ThemedText style={[
          sortStyles.label, 
          item.active ? { color: 'white', fontWeight: 'bold'} : {color: '#555'}
        ]}>
            {i18n.t(item.label)}
          </ThemedText>
        <MaterialIcons name={item.icon} 
                       size={24} 
                       color={item.active ? 'white' : '#555'} 
                       style={[{
                        marginLeft: 14, 
                        width: 25, 
                        fontWeight: 'normal'
                      }, item.id === 3 ? sortStyles.diamond : null]}/>
        {
          item.active && <MaterialIcons name={getOrderIcon(item)} style={cardStyles.sortIconList}></MaterialIcons>
        }
        
      </ThemedView>
    </TouchableOpacity>
  );

  return (
    <>
    <BlurView intensity={Platform.OS === 'web' ? 15 : 5} 
              style={StyleSheet.absoluteFill} 
              tint="light" 
              experimentalBlurMethod='dimezisBlurView'/>
      <Pressable style={LayoutStyles.overlay} 
                 onPress={() => closeMenu()}>
      </Pressable>
      <Animated.View style={[animatedStyle, sortStyles.container]}>
        <View style={[styles.modalHeader, {borderTopLeftRadius: 40, borderTopRightRadius: 40}]}>
          <ThemedText style={ModalStyles.modalHeaderTitle}>{i18n.t('order')}</ThemedText>
        </View>
        <ThemedView style={[styles.modalScrollView, {flex: 1}]}>
          <ThemedView style={{flex: 1}}>
          <FlatList data={data}
                    keyExtractor={(item: any) => item.id}
                    renderItem={renderItem}
                    scrollEnabled={false}
                    contentContainerStyle={{marginRight: 30}}
                    showsVerticalScrollIndicator={false}
          />
          </ThemedView>
        </ThemedView>
        <View style={styles.modalFooter}>
          <Pressable style={ButtonStyles.button} 
                            onPress={() => closeMenu()} 
                            accessibilityLabel={CLOSE_SENTENCE}>
            <View style={ButtonStyles.insetBorder}>
              <IconSymbol name="clear"></IconSymbol>
            </View>
          </Pressable>
        </View>
      </Animated.View>
    </>
  );
}

