import { BlurView } from "expo-blur";
import { FlatList, Platform, Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import Animated from 'react-native-reanimated'
import { useEffect, useCallback, useState, useContext } from "react";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { SortItem, TabMenu } from "@/shared/definitions/interfaces/layout.interfaces";
import { ButtonStyles, LayoutStyles, ModalStyles, sortStyles } from "@/shared/styles/component.styles";
import { CLOSE_SENTENCE, NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useI18n } from "../../../core/providers/LanguageProvider";
import { AppContext } from "@/app/_layout";
import { INITIAL_ATTACK_SORT_DATA } from "@/shared/definitions/utils/constants";
import { cardStyles } from "@/app/(tabs)/cards";
import SoundService from "@/core/services/sounds.service";

export default function SortAttackMenu({
  isVisible,
  onClose,
  animatedStyle,
}: TabMenu) {
  const [data, setData] = useState(INITIAL_ATTACK_SORT_DATA);
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
    dispatch({ type: 'SET_ATTACK_SORT', value: updated });
  };

  useEffect(() => {
    if (state.filterState.attack_sort.length > 0) {
      const active = [...state.filterState.attack_sort];
      setData(active);
    }
  }, [state.filterState.attack_sort])

  const getOrderIcon = useCallback((item: SortItem) => {
    return !item?.order ? 'arrow-upward' : 
              item.order === 'asc' ? 'arrow-upward' : 'arrow-downward';
  }, [state.filterState.attack_sort]);

  const renderItem = ({ item } : {item: SortItem}) => (
    <TouchableOpacity onPress={() => toggleActive(item.id)} style={sortStyles.itemContainer}>
      <ThemedView style={[sortStyles.item, item.active && sortStyles.activeItem]}>
        <ThemedText style={[
          sortStyles.label, 
          item.active ? { color: 'white', fontWeight: 'bold'} : {color: '#555'}
        ]}>
            {i18n.t(item.label)}
          </ThemedText>
        <MaterialIcons name={item.icon as any} 
                       size={24} 
                       color={item.active ? 'white' : '#555'} 
                       style={[{
                        marginLeft: 14, 
                        width: 25, 
                        fontWeight: 'normal'
                      }, item.id === 2 && {top: -2}]}/>
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
      <Animated.View style={[animatedStyle, sortStyles.container,{height: 434}]}>
        <View style={[styles.modalHeader, {borderTopLeftRadius: 40, borderTopRightRadius: 40}]}>
          <ThemedText style={ModalStyles.modalHeaderTitle}>{i18n.t('order')}</ThemedText>
        </View>
        <ThemedView style={[styles.modalScrollView, {flex: 1}]}>
          <ThemedView style={{flex: 1}}>
          <FlatList data={data}
                    keyExtractor={(item: any) => item.id}
                    renderItem={renderItem}
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

