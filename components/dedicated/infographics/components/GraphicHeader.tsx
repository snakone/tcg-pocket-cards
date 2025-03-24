import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useI18n } from "@/core/providers/LanguageProvider";

export const GraphicHeader = ({styles, child = true}: {styles: any, child?: boolean}) => {
  const {i18n} = useI18n();
  
  return (
    <>
      <ThemedText style={styles.mainTitle}>{i18n.t('graphic_title')}</ThemedText>
      <ThemedView style={{marginBottom: 10}}>
        <ThemedText style={styles.text}>{i18n.t('infographics_intro')}</ThemedText>
      </ThemedView>
      {
        !child && <ThemedText style={styles.subTitlte}>{i18n.t('summary')}</ThemedText>
      }
      <ThemedView style={child && {marginBottom: 16}}>
        <ThemedText style={styles.text}>{i18n.t('infographics_summary')}</ThemedText>
      </ThemedView>
    </>
  )
}