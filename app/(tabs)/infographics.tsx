import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import React from "react";
import { TouchableOpacity, View, StyleSheet, Platform, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Switch } from "react-native-paper";
import { Slider } from "@miblanchard/react-native-slider";

import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { GraphicCollage } from "@/components/dedicated/infographics/GraphicCollage";
import LoadingOverlay from "@/components/ui/LoadingOverlay";
import { useI18n } from "@/core/providers/LanguageProvider";
import { BACKUP_HEIGHT } from "@/shared/definitions/utils/constants";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { CardGridStyles, filterStyles, homeScreenStyles } from "@/shared/styles/component.styles";
import SoundService from "@/core/services/sounds.service";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { settingsStyles } from "../screens/settings";
import { Colors } from "@/shared/definitions/utils/colors";
import { GraphicsScreenModal } from "@/components/modals";

export default function InfoGraphicScreen() {
  const {i18n} = useI18n();
  const [loading, setLoading] = useState(false);
  const [quality, setQuality] = useState<number>(0.9);

  const [showAll, setShowAll] = useState<boolean>(false);
  const [showExpansion, setShowExpansion] = useState<boolean>(true);
  const [showGrades, setShowGrades] = useState<boolean>(false);
  const [showTypes, setShowTypes] = useState<boolean>(false);
  const [showMiscellania, setShowMiscellania] = useState<boolean>(false);
  const [showWeak, setShowWeak] = useState<boolean>(false);
  const [showTop, setShowTop] = useState<boolean>(false);
  const [showConditions, setShowConditions] = useState<boolean>(false);

  const showSet = useRef({
    all: setShowAll,
    expansion: setShowExpansion,
    grades: setShowGrades,
    types: setShowTypes, 
    miscellania: setShowMiscellania,
    weak: setShowWeak,
    top: setShowTop,
    conditions: setShowConditions
  });

  const [isVisible, setIsVisible] = useState(false);

  const MyInfoGraphic = () => (
    <>
      {
        Platform.OS === 'web' &&
        <View style={[styles.container, {padding: 0}]}>
          <GraphicCollage showExpansion={showExpansion}
                          showGrades={showGrades}
                          showTypes={showTypes}
                          showMiscellania={showMiscellania}
                          showWeak={showWeak}
                          showTop={showTop}
                          showConditions={showConditions}
                          quality={quality}
                          onFinish={() => (setLoading(false), setIsVisible(false))}/>
        </View>
      }
    </>
  );

  async function handleChange(key: string, value: boolean): Promise<void> {
    (showSet.current as any)[key](value);
    await SoundService.play('POP_PICK');
  }

  useEffect(() => {
    return () => {
      setIsVisible(false);
    }
  }, []);

  const TrackItem = useCallback((index: any) => {
    if (index === 0 || index === 10) return null;
    return (
      <ThemedView style={{
        width: 2,
        height: 4,
        right: -10,
        backgroundColor: '#777',
        position: 'relative',
        zIndex: 1000,
        opacity: 1
      }}>  
      </ThemedView>
    )
  }, []);

  function handleQualityChange(ev: number[]): void {
    SoundService.play('SCALE');
    const value = ev[0] / 10;
    setQuality(value);
  }

  const graphic = useMemo(() => <MyInfoGraphic></MyInfoGraphic>, 
    [showWeak, showTop, showTypes, showMiscellania, showGrades, showExpansion, showConditions]);

  const download = async () => {
    SoundService.play('POP_PICK');
    setLoading(true);
    setTimeout(() => setIsVisible(true), 333);
  }

  function handleAll(): void {
    SoundService.play('POP_PICK');
    setShowAll(!showAll);
    showSet.current.expansion(!showAll);
    showSet.current.grades(!showAll);
    showSet.current.types(!showAll);
    showSet.current.miscellania(!showAll);
    showSet.current.weak(!showAll);
    showSet.current.top(!showAll);
    showSet.current.conditions(!showAll);
  }

  return (
    <>
      { loading && <LoadingOverlay/> }
        <ParallaxScrollView title={"infographics"} 
                            modalTitle='infographics'
                            modalContent={GraphicsScreenModal()}
                            styles={{paddingInline: 14}}
                            modalHeight={BACKUP_HEIGHT}>
          <ScrollView showsVerticalScrollIndicator={false} style={{paddingInline: 14}}>
            <ThemedView style={{gap: 8}}>
              <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <ThemedText style={[filterStyles.header, {marginBottom: 24}, i18n.locale === 'ja' && {marginBottom: 20}]}>{i18n.t('export')}</ThemedText>
                <TouchableOpacity onPress={handleAll}>
                  <MaterialIcons name="sync" 
                                style={{fontSize: 26, left: -4, top: -7, opacity: 0.5}} 
                                color={Colors.light.icon}>
                  </MaterialIcons>
                </TouchableOpacity>
              </ThemedView>

              <ThemedView style={[settingsStyles.container, styles.item]}>
                <ThemedView style={settingsStyles.row}>
                  <ThemedText>{i18n.t('expansions')}</ThemedText>
                  <ThemedView style={[settingsStyles.rightContainer, {width: 'auto'}]}>
                    <Switch trackColor={{false: Colors.light.skeleton, true: 'mediumaquamarine'}}
                                        color={'white'}
                                        onValueChange={(value) => handleChange('expansion', value)}
                                        style={CardGridStyles.switch}
                                        value={showExpansion}/>
                  </ThemedView>
                </ThemedView>
              </ThemedView>

              <ThemedView style={[settingsStyles.container, styles.item]}>
                <ThemedView style={settingsStyles.row}>
                  <ThemedText>{i18n.t('grade')}</ThemedText>
                  <ThemedView style={[settingsStyles.rightContainer, {width: 'auto'}]}>
                    <Switch trackColor={{false: Colors.light.skeleton, true: 'mediumaquamarine'}}
                                        color={'white'}
                                        onValueChange={(value) => handleChange('grades', value)}
                                        style={CardGridStyles.switch}
                                        value={showGrades}/>
                  </ThemedView>
                </ThemedView>
              </ThemedView>

              <ThemedView style={[settingsStyles.container, styles.item]}>
                <ThemedView style={settingsStyles.row}>
                  <ThemedText>{i18n.t('types')}</ThemedText>
                  <ThemedView style={[settingsStyles.rightContainer, {width: 'auto'}]}>
                    <Switch trackColor={{false: Colors.light.skeleton, true: 'mediumaquamarine'}}
                                        color={'white'}
                                        onValueChange={(value) => handleChange('types', value)}
                                        style={CardGridStyles.switch}
                                        value={showTypes}/>
                  </ThemedView>
                </ThemedView>
              </ThemedView>

              <ThemedView style={[settingsStyles.container, styles.item]}>
                <ThemedView style={settingsStyles.row}>
                  <ThemedText>{i18n.t('miscellania')}</ThemedText>
                  <ThemedView style={[settingsStyles.rightContainer, {width: 'auto'}]}>
                    <Switch trackColor={{false: Colors.light.skeleton, true: 'mediumaquamarine'}}
                                        color={'white'}
                                        onValueChange={(value) => handleChange('miscellania', value)}
                                        style={CardGridStyles.switch}
                                        value={showMiscellania}/>
                  </ThemedView>
                </ThemedView>
              </ThemedView>

              <ThemedView style={[settingsStyles.container, styles.item]}>
                <ThemedView style={settingsStyles.row}>
                  <ThemedText>{i18n.t('weakness')}</ThemedText>
                  <ThemedView style={[settingsStyles.rightContainer, {width: 'auto'}]}>
                    <Switch trackColor={{false: Colors.light.skeleton, true: 'mediumaquamarine'}}
                                        color={'white'}
                                        onValueChange={(value) => handleChange('weak', value)}
                                        style={CardGridStyles.switch}
                                        value={showWeak}/>
                  </ThemedView>
                </ThemedView>
              </ThemedView>

              <ThemedView style={[settingsStyles.container, styles.item]}>
                <ThemedView style={settingsStyles.row}>
                  <ThemedText>{i18n.t('top_20')}</ThemedText>
                  <ThemedView style={[settingsStyles.rightContainer, {width: 'auto'}]}>
                    <Switch trackColor={{false: Colors.light.skeleton, true: 'mediumaquamarine'}}
                                        color={'white'}
                                        onValueChange={(value) => handleChange('top', value)}
                                        style={CardGridStyles.switch}
                                        value={showTop}/>
                  </ThemedView>
                </ThemedView>
              </ThemedView>

              <ThemedView style={[settingsStyles.container, styles.item]}>
                <ThemedView style={settingsStyles.row}>
                  <ThemedText>{i18n.t('conditions')}</ThemedText>
                  <ThemedView style={[settingsStyles.rightContainer, {width: 'auto'}]}>
                    <Switch trackColor={{false: Colors.light.skeleton, true: 'mediumaquamarine'}}
                                        color={'white'}
                                        onValueChange={(value) => handleChange('conditions', value)}
                                        style={CardGridStyles.switch}
                                        value={showConditions}/>
                  </ThemedView>
                </ThemedView>
              </ThemedView>

              <ThemedView style={[settingsStyles.container, {marginTop: 10}]}>
                <ThemedView style={settingsStyles.row}>
                  <ThemedText>{i18n.t('quality')}</ThemedText>
                  <ThemedView style={[settingsStyles.rightContainer, {width: 25}]}>
                    <IconSymbol name={'q.circle'} 
                                style={[settingsStyles.icon]} 
                                color={Colors.light.text}>
                    </IconSymbol>
                  </ThemedView>
                </ThemedView>
                <Slider maximumValue={10} 
                        minimumValue={0} 
                        step={1} 
                        containerStyle={settingsStyles.slider}
                        maximumTrackTintColor={Colors.light.skeleton}
                        minimumTrackTintColor="mediumaquamarine" 
                        animateTransitions={true} 
                        animationType={'timing'}
                        thumbStyle={settingsStyles.thumb}
                        trackStyle={settingsStyles.track}
                        trackClickable={true}
                        value={quality * 10}
                        onSlidingComplete={handleQualityChange}
                        trackMarks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                        renderTrackMarkComponent={(index) => <TrackItem index={index}></TrackItem>}/>
              </ThemedView>
            </ThemedView>
          </ScrollView> 

          <TouchableOpacity onPress={download} style={[homeScreenStyles.ctaButton, {marginTop: 0, marginBottom: 18, marginHorizontal: 14, top: -14}]}>
            <ThemedText style={[homeScreenStyles.ctaText, {textAlign: 'center', height: 22}]}>{i18n.t('download')}</ThemedText>
          </TouchableOpacity>
        </ParallaxScrollView>
      { isVisible && 
        <ThemedView style={{position: 'absolute', left: -9999}}>
          {graphic}
        </ThemedView>
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 1280,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 4,
    position: 'absolute',
    left: -444,
  },
  item: {
    marginBottom: 8,
    borderRadius: 12, 
    paddingVertical: 9,
    paddingRight: 10
  }
});