import { ScrollView } from "react-native";
import { useState } from "react";
import { useSharedValue } from "react-native-reanimated";

import { useI18n } from "@/core/providers/LanguageProvider";
import { sharedModalStyles } from "@/shared/styles/component.styles";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import ScrollIndicator from "../ui/ScrollIndicator";

export function CreditsModal() {
  const scrollY = useSharedValue(0);
  const [contentHeight, setContentHeight] = useState(1);
  const [scrollViewHeight, setScrollViewHeight] = useState(1);
  const {i18n} = useI18n();

  const styles = sharedModalStyles;

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
        <ThemedText style={[styles.subTitle, {marginTop: 4}]}>{i18n.t('director')}</ThemedText>
        <ThemedText style={styles.subText}>Sergi Martínez</ThemedText>

        <ThemedText style={[styles.subTitle, {marginTop: 4}]}>{i18n.t('owner')}</ThemedText>
        <ThemedText style={styles.subText}>Sergi Martínez</ThemedText>

        <ThemedText style={[styles.subTitle, {marginTop: 4}]}>{i18n.t('credits_idea')}</ThemedText>
        <ThemedText style={styles.subText}>©2024 Pokémon. ©1995-2024 Nintendo / Creatures Inc. / GAME FREAK inc. ©2024 DeNA Co., Ltd. TM, ® Nintendo.</ThemedText>

        <ThemedText style={[styles.subTitle, {marginTop: 4}]}>{i18n.t('engineers')}</ThemedText>
        <ThemedText style={styles.subText}>Sergi Martínez</ThemedText>

        <ThemedText style={[styles.subTitle, {marginTop: 4}]}>{i18n.t('developers')}</ThemedText>
        <ThemedText style={styles.subText}>Sergi Martínez</ThemedText>

        <ThemedText style={[styles.subTitle, {marginTop: 4}]}>{i18n.t('frontend')}</ThemedText>
        <ThemedText style={styles.subText}>Sergi Martínez</ThemedText>

        <ThemedText style={[styles.subTitle, {marginTop: 4}]}>{i18n.t('backend')}</ThemedText>
        <ThemedText style={styles.subText}>Sergi Martínez</ThemedText>

        <ThemedText style={[styles.subTitle, {marginTop: 4}]}>{i18n.t('database')}</ThemedText>
        <ThemedText style={styles.subText}>Mongo DB Inc.</ThemedText>

        <ThemedText style={[styles.subTitle, {marginTop: 4}]}>{i18n.t('server')}</ThemedText>
        <ThemedText style={styles.subText}>Nodejs</ThemedText>
        
        <ThemedText style={[styles.subTitle, {marginTop: 4}]}>{i18n.t('hosting')}</ThemedText>
        <ThemedText style={styles.text}>Github</ThemedText>
        <ThemedText style={styles.text}>Netlify ({i18n.t('web')})</ThemedText>
        <ThemedText style={styles.subText}>Render ({i18n.t('server')})</ThemedText>

        <ThemedText style={[styles.subTitle, {marginTop: 4}]}>{i18n.t('support')}</ThemedText>
        <ThemedText style={styles.subText}>Sergi Martínez</ThemedText>

        <ThemedText style={[styles.subTitle, {marginTop: 4}]}>{i18n.t('art')}</ThemedText>
        <ThemedText style={styles.subText}>©2024 Pokémon. ©1995-2024 Nintendo / Creatures Inc. / GAME FREAK inc. ©2024 DeNA Co., Ltd. TM, ® Nintendo.</ThemedText>

        <ThemedText style={[styles.subTitle, {marginTop: 4}]}>{i18n.t('artist')}</ThemedText>
        <ThemedText style={styles.subText}>©2024 Pokémon. ©1995-2024 Nintendo / Creatures Inc. / GAME FREAK inc. ©2024 DeNA Co., Ltd. TM, ® Nintendo.</ThemedText>

        <ThemedText style={[styles.subTitle, {marginTop: 4}]}>{i18n.t('designers')}</ThemedText>
        <ThemedText style={styles.subText}>Sergi Martínez</ThemedText>

        <ThemedText style={[styles.subTitle, {marginTop: 4}]}>{i18n.t('adaptation')}</ThemedText>
        <ThemedText style={styles.subText}>Sergi Martínez</ThemedText>

        <ThemedText style={[styles.subTitle, {marginTop: 4}]}>{i18n.t('translations')}</ThemedText>
        <ThemedText style={styles.subText}>{i18n.t('translator')}</ThemedText>

        <ThemedText style={[styles.subTitle, {marginTop: 4}]}>{i18n.t('thanks_to')}</ThemedText>
        <ThemedText style={styles.text}>Nintendo©</ThemedText>
        <ThemedText style={styles.text}>{i18n.t('community')}</ThemedText>
        <ThemedText style={styles.text}>Pixabay.com <ThemedText style={styles.text}>({i18n.t('music_and_sound')})</ThemedText></ThemedText>
        <ThemedText style={styles.text}>Pocket.codex.gg ({i18n.t('cards')})</ThemedText>
        <ThemedText style={styles.text}>VSCode (IDE)</ThemedText>
        <ThemedText style={styles.text}>OpenAI ChatGPT</ThemedText>
        <ThemedText style={styles.text}>React Native</ThemedText>
        <ThemedText style={styles.text}>Expo</ThemedText>
        <ThemedText style={styles.text}>Google Android</ThemedText>
        <ThemedText style={styles.text}>Microsoft Edge</ThemedText>
        <ThemedText style={styles.text}>Tiny PNG ({i18n.t('image_compress')}) </ThemedText>
        <ThemedText style={styles.text}>{i18n.t('thanks_users')}</ThemedText>
        
      </ScrollView>
    </ThemedView>
  )
}