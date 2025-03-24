import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useI18n } from "@/core/providers/LanguageProvider";

export const GraphicFooter = ({styles, child = true}: {styles: any, child?: boolean}) => {
  const {i18n} = useI18n();
  
  return (
    <>
      <ThemedView style={{height: 16}}></ThemedView>
      <ThemedView style={[styles.summary, {marginHorizontal: child ? 0 : 16, marginTop: 0, padding: 16, marginBottom: 0}]}>
        <ThemedText style={[styles.text, {textAlign: 'center', fontWeight: 'bold'}]}>
          {i18n.t('infographics_footer')}
        </ThemedText>
      </ThemedView>
    </>
  )
}