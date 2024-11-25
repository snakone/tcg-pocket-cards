import { BlurView } from "expo-blur";
import { FlatList, Platform, Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import Animated from 'react-native-reanimated'
import { Audio } from "expo-av";
import { useRef, useEffect, useCallback, useState, useContext } from "react";

import { SortItem, TabMenu } from "@/shared/definitions/interfaces/layout.interfaces";
import { ButtonStyles, LayoutStyles, ModalStyles } from "@/shared/styles/component.styles";
import { CLOSE_SENTENCE, NO_CONTEXT } from "@/shared/definitions/sentences/global.sentences";
import { AUDIO_MENU_CLOSE } from "@/shared/definitions/sentences/path.sentences";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { MaterialIcons } from "@expo/vector-icons";
import { useI18n } from "../../../core/providers/LanguageProvider";
import { AppContext } from "@/app/_layout";

export default function SortCardMenu({
  isVisible,
  onClose,
  animatedStyle,
}: TabMenu) {
  if (!isVisible) return null;

  const context = useContext(AppContext);
  if (!context) { throw new Error(NO_CONTEXT); }
  const { state, dispatch } = context;
  const {i18n} = useI18n();

  const initialData: SortItem[] = [
    { id: 1, label: 'order_by_number', icon: 'content-paste-search', active: true, order: 'asc' },
    { id: 2, label: 'order_by_type', icon: 'stars', active: false, order: 'asc' },
    { id: 3, label: 'order_by_rarity', icon: 'diamond', active: false, order: 'asc' },
    { id: 4, label: 'order_by_pokedex', icon: 'smartphone', active: false, order: 'asc' },
  ];

  const [data, setData] = useState(initialData);

  const styles = ModalStyles;
  const closed = useRef<Audio.Sound>();

  useEffect(() => {
    async function loadSounds() {
      const { sound } = await Audio.Sound.createAsync(AUDIO_MENU_CLOSE);
      closed.current = sound;
    }

    loadSounds();
  }, []);

  const playSound = useCallback(async () => {
    if (closed.current) await closed.current.replayAsync();
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

  const deactivateAll = () => {
    const updated = data.map(d => (d.active = false, d));
    setData(updated);
  }

  useEffect(() => {
    if (state.filterState.sort.length > 0) {
      const active = [...state.filterState.sort];
      setData(active);
    }
  }, [state.filterState.sort])

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
      <Animated.View style={[animatedStyle, filterStyles.container]}>
        <View style={[styles.modalHeader, {borderTopLeftRadius: 40, borderTopRightRadius: 40}]}>
          <ThemedText style={ModalStyles.modalHeaderTitle}>{i18n.t('order')}</ThemedText>
        </View>
        <ThemedView style={styles.modalScrollView}>
          <ThemedView style={{flex: 1}}>
          <FlatList data={data}
                    keyExtractor={(item: any) => item.id}
                    renderItem={renderItem}
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
          />
          </ThemedView>
        </ThemedView>
        <View style={styles.modalFooter}>
          <TouchableOpacity style={ButtonStyles.button} 
                            onPress={() => closeMenu()} 
                            accessibilityLabel={CLOSE_SENTENCE}>
            <View style={ButtonStyles.insetBorder}>
              <IconSymbol name="clear"></IconSymbol>
            </View>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </>
  );
}

const filterStyles = StyleSheet.create({
  container: {
    height: 375, 
    position: 'absolute', 
    width: '100%',
    bottom: 0,
    zIndex: 100,
    backgroundColor: 'white',
    borderTopLeftRadius: 40, borderTopRightRadius: 40
  },
});

const sortStyles = StyleSheet.create({
  itemContainer: {
    paddingBlock: 4,
  },
  label: {
    fontSize: 15,
    color: '#555',
    flex: 1,
    marginLeft: 12,
    fontWeight: '400',
    width: '100%',
    textAlign: 'right',
  },
  item: {
    borderRadius: 18,
    flexDirection: 'row',
    paddingBlock: 8,
    paddingInline: 12
  },
  activeItem: {
    color: 'white',
    backgroundColor: '#515151',
    fontWeight: 'bold'
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginLeft: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
  },
  diamond: {
    position: 'relative',
    top: 1
  }
});

