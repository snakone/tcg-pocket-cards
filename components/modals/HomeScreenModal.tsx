import { useI18n } from "@/core/providers/LanguageProvider";
import { ThemedText } from "../ThemedText";
import { ScrollView } from "react-native";
import { ThemedView } from "../ThemedView";
import { homeScreenModalStyles } from "@/shared/styles/component.styles";
import { IconSymbol } from "../ui/IconSymbol";

export function HomeScreenModal() {
  const {i18n} = useI18n();
  const styles = homeScreenModalStyles;
  
  return (
    <ScrollView style={{flex: 1, maxHeight: 500}} showsVerticalScrollIndicator={false}>
      <ThemedText style={styles.title}>{i18n.t('home_welcome')}</ThemedText>
      <ThemedText style={styles.text}>
        {i18n.t('home_modal_intro')}
      </ThemedText>
      <ThemedView style={{marginBottom: 20}}>
        <ThemedView style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <IconSymbol
              name="chevron.right"
              size={18}
              weight="medium"
              color="skyblue"
              style={{marginRight: 8, fontSize: 28}}
            />
            <ThemedText style={[styles.text, {fontWeight: '600'}]}>
              {i18n.t('home_modal_explore')} 
            </ThemedText>
        </ThemedView>
        <ThemedText style={styles.text}>{i18n.t('home_modal_explore_sentence')}</ThemedText>
      </ThemedView>
      <ThemedView style={{marginBottom: 20}}>
        <ThemedView style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <IconSymbol
              name="chevron.right"
              size={18}
              weight="medium"
              color="skyblue"
              style={{marginRight: 8, fontSize: 28}}
            />
            <ThemedText style={[styles.text, {fontWeight: '600'}]}>
              {i18n.t('home_modal_filter')} 
            </ThemedText>
        </ThemedView>
        <ThemedText style={styles.text}>{i18n.t('home_modal_filter_sentence')}</ThemedText>
      </ThemedView>
      <ThemedView style={{marginBottom: 20}}>
        <ThemedView style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <IconSymbol
              name="chevron.right"
              size={18}
              weight="medium"
              color="skyblue"
              style={{marginRight: 8, fontSize: 28}}
            />
            <ThemedText style={[styles.text, {fontWeight: '600'}]}>
              {i18n.t('home_modal_order')} 
            </ThemedText>
        </ThemedView>
        <ThemedText style={styles.text}>{i18n.t('home_modal_order_sentence')}</ThemedText>
      </ThemedView>
      <ThemedView style={{marginBottom: 20}}>
        <ThemedView style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <IconSymbol
              name="chevron.right"
              size={18}
              weight="medium"
              color="skyblue"
              style={{marginRight: 8, fontSize: 28}}
            />
            <ThemedText style={[styles.text, {fontWeight: '600'}]}>
              {i18n.t('home_modal_create')} 
            </ThemedText>
        </ThemedView>
        <ThemedText style={styles.text}>{i18n.t('home_modal_create_sentence')}</ThemedText>
      </ThemedView>

      <ThemedText type="subtitle" style={styles.text}>{i18n.t('home_modal_new')}</ThemedText>
      <ThemedText style={styles.text}>
        - {i18n.t('home_modal_filter_exclusive')}
      </ThemedText>
      <ThemedText style={styles.text}>
        - {i18n.t('home_modal_new_sort')}
      </ThemedText>
      <ThemedText style={styles.text}>
        - {i18n.t('home_modal_design')}
      </ThemedText>

      <ThemedText style={[styles.text, {marginBottom: 20}]}>
        {i18n.t('home_modal_want')} {i18n.t('home_modal_last')}
      </ThemedText>

    </ScrollView>
  )
}