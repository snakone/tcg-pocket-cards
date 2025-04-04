import { useState } from "react";
import { ScrollView } from "react-native";
import { useSharedValue } from "react-native-reanimated";

import { useI18n } from "@/core/providers/LanguageProvider";
import { sharedModalStyles } from "@/shared/styles/component.styles";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ScrollIndicator from "@/components//ui/ScrollIndicator";

export function UserDataModal() {
  const scrollY = useSharedValue(0);
  const [contentHeight, setContentHeight] = useState(1);
  const [scrollViewHeight, setScrollViewHeight] = useState(1);
  const {i18n} = useI18n();

  const styles = sharedModalStyles;
  const lastUpdate = '24/03/2025';

  const handleContentSizeChange = (width: number, height: number) => {
    setContentHeight(height);
  };

  const handleScroll = (event: any) => {
    scrollY.value = event.nativeEvent.contentOffset.y;
  };

  const handleLayout = (event: any) => {
    setScrollViewHeight(event.nativeEvent.layout.height);
  };
  return (
    <ThemedView style={{flex: 1}}>
      <ScrollIndicator contentHeight={contentHeight} 
                      scrollViewHeight={scrollViewHeight} 
                      scrollY={scrollY}>
      </ScrollIndicator>
      <ScrollView style={{flex: 1}} 
                  showsVerticalScrollIndicator={false} 
                  onScroll={handleScroll} 
                  scrollEventThrottle={16}
                  onContentSizeChange={handleContentSizeChange}
                  onLayout={handleLayout}>
        <ThemedText style={[styles.title, {marginTop: 4}]}>{i18n.t('intro')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('user_data_sentence')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('user_data_get')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('user_data_get_intro')}</ThemedText>

        <ThemedText style={styles.text}>- {i18n.t('user_data_get_no_info')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('user_data_get_no_get')}</ThemedText>

        <ThemedText style={styles.text}>{i18n.t('user_data_get_end')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('user_data_save')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('user_data_save_intro')}</ThemedText>

        <ThemedText style={styles.text}>- {i18n.t('user_data_save_info')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('user_data_save_export')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('user_data_save_example')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('user_data_save_local')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('user_data_save_images')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('user_data_no_internet')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('user_data_no_internet_intro')}</ThemedText>

        <ThemedText style={styles.text}>- {i18n.t('user_data_no_internet_create')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('user_data_no_internet_main')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('user_data_order')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('user_data_order_intro')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('user_data_order_storage')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('user_data_order_end')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('user_data_security')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('user_data_security_intro')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('user_data_security_info')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('user_data_security_code')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('user_data_security_github')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('user_data_limits')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('user_data_limits_intro')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('user_data_limits_lost')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('user_data_limits_access')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('user_data_transfer')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('user_data_transfer_intro')}</ThemedText>

        <ThemedText style={styles.text}>- {i18n.t('user_data_transfer_hide')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('user_data_transfer_total')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('user_data_options')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('user_data_options_intro')}</ThemedText>

        <ThemedText style={styles.text}>- {i18n.t('user_data_options_control')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('user_data_options_sound')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('user_data_compromiss')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('user_data_compromiss_intro')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('user_data_local_storage')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('user_data_local_storage_intro')}</ThemedText>

        <ThemedText style={[styles.text, {fontWeight: 600}]}>{i18n.t('user_data_local_storage_elements')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('user_data_local_storage_elements_next')}</ThemedText>
        <ThemedText style={[styles.text, {fontWeight: 600}]}>{i18n.t('user_data_local_storage_elements_config')}</ThemedText>

        <ThemedText style={styles.text}>- {i18n.t('user_data_local_storage_elements_intro')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('user_data_local_storage_elements_language')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('user_data_local_storage_elements_sound')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('user_data_local_storage_elements_music')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('user_data_local_storage_elements_sound_volume')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('user_data_local_storage_elements_music_volume')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('user_data_local_storage_elements_version')}</ThemedText>

        <ThemedText style={[styles.text, {fontWeight: 600}]}>{i18n.t('user_data_local_storage_elements_user')}</ThemedText>

        <ThemedText style={styles.text}>- {i18n.t('user_data_local_storage_elements_name')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('user_data_local_storage_elements_avatar')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('user_data_local_storage_elements_coin')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('user_data_local_storage_elements_best')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('user_data_local_storage_elements_favorites')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('user_data_local_storage_elements_decks')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('user_data_local_storage_elements_trades')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('user_data_local_storage_elements_collection')}</ThemedText>

        <ThemedText style={[styles.text, {fontWeight: 600}]}>{i18n.t('user_data_local_storage_use')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('user_data_local_storage_use_persistent')}</ThemedText>

        <ThemedText style={styles.text}>- {i18n.t('user_data_local_storage_use_all')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('user_data_local_storage_use_config')}</ThemedText>

        <ThemedText style={styles.text}>{i18n.t('user_data_local_storage_use_security')}</ThemedText>

        <ThemedText style={styles.text}>- {i18n.t('user_data_local_storage_use_security_local')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('user_data_local_storage_use_security_sync')}</ThemedText>

        <ThemedText style={styles.text}>{i18n.t('user_data_local_storage_use_flex')}</ThemedText>

        <ThemedText style={styles.text}>- {i18n.t('user_data_local_storage_use_flex_modify')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('user_data_local_storage_use_flex_decks')}</ThemedText>

        <ThemedText style={[styles.text, {fontWeight: 600}]}>{i18n.t('user_data_local_storage_important')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('user_data_local_storage_important_intro')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('user_data_local_storage_important_exp')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('user_data_local_storage_important_exp_connect')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('user_data_local_storage_important_exp_privacy')}</ThemedText>
        
        <ThemedText style={[styles.text, {fontWeight: 600}]}>{i18n.t('user_data_local_storage_care')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('user_data_local_storage_care_intro')}</ThemedText>
        <ThemedText style={[styles.text, {color: 'crimson'}]}>- {i18n.t('user_data_local_storage_care_uninstall')}</ThemedText>
        <ThemedText style={styles.text}>- {i18n.t('user_data_local_storage_care_backup')}</ThemedText>

        <ThemedText style={styles.text}>{i18n.t('user_data_end_sentence')}</ThemedText>

        <ThemedText style={styles.title}>{i18n.t('user_data_contact')}</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('user_data_contact_intro')}</ThemedText>

        <ThemedText style={[styles.text, {marginTop: 25, fontSize: 13}]}>{i18n.t('last_update')}
          <ThemedText style={[styles.text, {fontSize: 13}]}>{lastUpdate}</ThemedText>
        </ThemedText>
        
      </ScrollView>
    </ThemedView>
  )
}