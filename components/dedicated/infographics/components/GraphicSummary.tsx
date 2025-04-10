import { Image } from 'expo-image';

import { useI18n } from '@/core/providers/LanguageProvider';

import { 
  GENETIC_APEX, 
  MYTHICAL_ISLAND_MEW_ICON, 
  SMACK_DOWN, 
  PROMO_A_ICON, 
  GENETIC_APEX_PIKACHU_ICON, 
  GENETIC_APEX_MEWTWO_ICON, 
  GENETIC_APEX_CHARIZARD_ICON, 
  SMACK_DOWN_DIALGA_ICON, 
  SMACK_DOWN_PALKIA_ICON, 
  TRIUMPH_LIGHT_ARCEUS_ICON, 
  NORMAL_RARITY, 
  STAR_RARITY, 
  CROWN_RARITY, 
  GRASS_ICON, 
  FIRE_ICON, 
  WATER_ICON, 
  ELECTRIC_ICON, 
  PSYCHIC_ICON, 
  FIGHT_ICON, 
  DARK_ICON, 
  STEEL_ICON, 
  DRAGON_ICON, 
  NORMAL_ICON,
  SHINING_REVELRY_ICON,
  RAINBOW_RARITY
} from "@/shared/definitions/sentences/path.sentences"

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import RainbowDivider from "../RainbowDivider";

interface GraphicSummaryProps {
  styles: any;
  data: any;
}

export const GraphicSummary = ({data, styles}: GraphicSummaryProps) => {
  const {i18n} = useI18n();

  const firstRow: any[] = [
    { label: 'genetic_apex', image: GENETIC_APEX, width: 68, height: 30, value: data.geneticPackCardsLength },
    { label: 'mythical_island', image: MYTHICAL_ISLAND_MEW_ICON, width: 68, height: 34, value: data.islandPackCardsLength },
    { label: 'smack_down_short', image: SMACK_DOWN, width: 70, height: 33, value: data.spacePackCardsLength },
    { label: 'promo_a', image: PROMO_A_ICON, width: 69, height: 34, value: data.promoAPackCardsLength },
  ];

  const secondRow: any[] = [
    { label: 'pikachu', image: GENETIC_APEX_PIKACHU_ICON, value: data.pikachuCardsLength },
    { label: 'mewtwo', image: GENETIC_APEX_MEWTWO_ICON, value: data.mewtwoCardsLength },
    { label: 'charizard', image: GENETIC_APEX_CHARIZARD_ICON, value: data.charizardCardsLength },
    { label: 'dialga', image: SMACK_DOWN_DIALGA_ICON, value: data.dialgaCardsLength, width: 70, height: 35 },
    { label: 'palkia', image: SMACK_DOWN_PALKIA_ICON, value: data.palkiaCardsLength, width: 70, height: 35 },
  ];

  const thirdRow: any[] = [
    { label: 'triumphant_light', image: TRIUMPH_LIGHT_ARCEUS_ICON,  width: 80, height: 34, value: data.triumphPackCardsLength },
    { label: 'shining_revelry', image: SHINING_REVELRY_ICON,  width: 69, height: 34, value: data.shiningCardsLength },
  ];

  const gradeRow: any[] = [
    { image: NORMAL_RARITY, length: 3, width: 22, height: 23, value: data.rareCardsLength },
    { image: NORMAL_RARITY, length: 4, width: 22, height: 23, value: data.doubleCardsLength },
    { image: STAR_RARITY, length: 1, width: 22, height: 23, value: data.artCardsLength },
    { image: STAR_RARITY, length: 2, width: 22, height: 23, value: data.superCardsLength },
    { image: STAR_RARITY, length: 3, width: 22, height: 23, value: data.inmersiveCardsLength },
    { image: RAINBOW_RARITY, length: 1, width: 22, height: 23, value: data.rainbowCardsLength,  },
    { image: RAINBOW_RARITY, length: 2, width: 22, height: 23, value: data.doubleRainbowCardsLength },
    { image: CROWN_RARITY, length: 1, width: 34, height: 23, value: data.crownCardsLength },
  ];

  const elementFirstRow: any[] = [
    { label: 'grass', image: GRASS_ICON, value: data.grassCardsLength },
    { label: 'fire', image: FIRE_ICON, value: data.fireCardsLength },
    { label: 'water', image: WATER_ICON, value: data.waterCardsLength },
    { label: 'electric', image: ELECTRIC_ICON, value: data.electricCardsLength },
    { label: 'psychic', image: PSYCHIC_ICON, value: data.psychicCardsLength },
    { label: 'fight', image: FIGHT_ICON, value: data.fightCardsLength },
  ];

  const elementSecondRow: any[] = [
    { label: 'dark', image: DARK_ICON, value: data.darkCardsLength },
    { label: 'steel', image: STEEL_ICON, value: data.steelCardsLength },
    { label: 'dragon', image: DRAGON_ICON, value: data.dragonCardsLength },
    { label: 'normal', image: NORMAL_ICON, value: data.normalCardsLength },
  ];

  const miscellaniaRow: any[] = [
    { label: 'abilities', value: data.withAbilityCardsLength },
    { label: 'items', value: data.itemCardsLength },
    { label: 'tools', value: data.toolCardsLength },
    { label: 'fossils', value: data.fossilCardsLength },
    { label: 'supporter', value: data.supporterCardsLength },
  ];

  const conditionFirstRow: any[] = [
    { label: 'condition_attack_bench', value: data.benchConditionLength },
    { label: 'status_recoil', value: data.recoilConditionLength },
    { label: 'condition_extra_damage', value: data.extraConditionLength },
    { label: 'condition_resist', value: data.resistConditionLength },
    { label: 'condition_heal', value: data.healConditionLength },
  ];

  const conditionSecondRow: any[] = [
    { label: 'status_poison', value: data.poisonConditionLength },
    { label: 'status_paralyze', value: data.paralizeConditionLength },
    { label: 'status_sleep', value: data.sleepConditionLength },
    { label: 'status_confusion', value: data.confusionConditionLength },
    { label: 'status_burned', value: data.burnedConditionLength },
  ];

  const conditionThirdRow: any[] = [
    { label: 'condition_flip', value: data.flipConditionLength },
    { label: 'condition_nothing', value: data.nothingConditionLength },
    { label: 'condition_discard', value: data.discardConditionLength },
    { label: 'condition_add', value: data.addConditionLength },
    { label: 'condition_corner', value: data.cornerConditionLength },
  ];

  const conditionFourthRow: any[] = [
    { label: 'condition_withdraw', value: data.withdrawConditionLength },
    { label: 'condition_retire', value: data.retireConditionLength },
    { label: 'status_call', value: data.callConditionLength },
    { label: 'condition_inactive', value: data.inactiveConditionLength },
    { label: 'arceus_link', value: data.arceusConditionLength },
  ];

  const weakFirstRow: any[] = [
    { label: 'grass', image: GRASS_ICON, value: data.weakGrassCardsLength },
    { label: 'fire', image: FIRE_ICON, value: data.weakFireCardsLength },
    { label: 'water', image: WATER_ICON, value: data.weakWaterCardsLength },
    { label: 'electric', image: ELECTRIC_ICON, value: data.weakElectricCardsLength },
    { label: 'psychic', image: PSYCHIC_ICON, value: data.weakPsychicCardsLength },
    { label: 'fight', image: FIGHT_ICON, value: data.weakFightCardsLength },
  ];

  const weakSecondRow: any[] = [
    { label: 'dark', image: DARK_ICON, value: data.weakDarkCardsLength },
    { label: 'steel', image: STEEL_ICON, value: data.weakSteelCardsLength },
    { label: 'dragon', image: DRAGON_ICON, value: 0 },
    { label: 'normal', image: NORMAL_ICON, value: 0 },
  ];
  
  return (
    <ThemedView style={styles.summary}>
      <ThemedView style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 20}}>
        {
          firstRow.map((item, index) => {
            return (
              <ThemedView style={[{
                width: '25%'}, 
                (index === firstRow.length - 1) && {width: '20%'}
              ]} key={index.toString()}>
                <ThemedView style={styles.summaryRow}>
                  <Image source={item.image} style={[
                    styles.summaryImage, 
                    {width: item.width, height: item.height}
                  ]}></Image>
                  <ThemedText style={[styles.summaryText]} 
                              numberOfLines={1} 
                              ellipsizeMode="tail">{i18n.t(item.label)}
                  </ThemedText>
                  <ThemedText style={[styles.summaryText, {left: -2, fontWeight: 'bold', color: 'black'}]}>
                    {item.value}
                  </ThemedText>
                </ThemedView>
              </ThemedView>
            )
          })
        }
      </ThemedView>

      <ThemedView style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 22}}>
        {
          secondRow.map((item, index) => {
            return (
              <ThemedView style={{width: '21%'}} key={index.toString()}>
                <ThemedView style={styles.summaryRow}>
                  <Image source={item.image} style={[
                    styles.summaryImage, item.width && {width: item.width}, 
                    item.height && {height: item.height}
                  ]}></Image>
                  <ThemedText style={styles.summaryText}>{i18n.t(item.label)}</ThemedText>
                  <ThemedText style={[styles.summaryText, {left: -2, fontWeight: 'bold', color: 'black'}]}>
                    {item.value}
                  </ThemedText>
                </ThemedView>
              </ThemedView>
            )
          })
        }
      </ThemedView>

      <ThemedView style={{flexDirection: 'row', justifyContent: 'center'}}>
        {
          thirdRow.map((item, index) => {
            return (
              <ThemedView style={{width: '23%'}} key={index.toString()}>
                <ThemedView style={styles.summaryRow}>
                  <Image source={item.image} style={[
                    styles.summaryImage, 
                    {width: item.width, height: item.height}
                  ]}></Image>
                  <ThemedText style={styles.summaryText}>{i18n.t(item.label)}</ThemedText>
                  <ThemedText style={[styles.summaryText, {left: -2, fontWeight: 'bold', color: 'black'}]}>
                    {item.value}
                  </ThemedText>
                </ThemedView>
              </ThemedView>
            )
          })
        }
      </ThemedView>

      <ThemedView style={{marginTop: 10}}>
        <RainbowDivider height={2}></RainbowDivider>
      </ThemedView>

      <ThemedView style={{flexDirection: 'row', marginTop: 6, justifyContent: 'center', gap: 50}}>
        {
          gradeRow.map((item, index) => {
            return (
              <ThemedView style={[styles.rowGap, {width: 'auto'}]} key={index.toString()}>
                <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 6, marginLeft: 8}}>
                  {Array.from({ length: item.length }).map((_, i) => (
                    <Image
                      key={(i + 1)}
                      source={item.image}
                      style={{
                        width: item.width,
                        height: item.height,
                        top: 1
                      }}
                    />
                  ))}
                </ThemedView>
                <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                  {item.value}
                </ThemedText>
              </ThemedView>
            )
          })
        }
      </ThemedView>

      <ThemedView style={{marginTop: 6}}>
        <RainbowDivider height={2}></RainbowDivider>
      </ThemedView>

      <ThemedView style={{flexDirection: 'row', marginTop: 8, justifyContent: 'center', gap: 40}}>
        {
          elementFirstRow.map((item, index) => {
            return (
              <ThemedView style={styles.energyRow} key={index.toString()}>
                <ThemedView style={styles.flexRow}>
                  <Image source={item.image} style={[styles.energy, styles.summaryEnergy]}/>
                  <ThemedText style={[styles.summaryText]}>{i18n.t(item.label)}</ThemedText>
                  <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                    {item.value}
                  </ThemedText>
                </ThemedView>
              </ThemedView>
            )
          })
        }
      </ThemedView>

      <ThemedView style={{flexDirection: 'row', marginTop: 20, justifyContent: 'center', gap: 40}}>
        {
          elementSecondRow.map((item, index) => {
            return (
              <ThemedView style={[styles.energyRow, {width: '16.6%'}]} key={index.toString()}>
                <ThemedView style={styles.flexRow}>
                  <Image source={item.image} style={[styles.energy, styles.summaryEnergy]}/>
                  <ThemedText style={[styles.summaryText]}>{i18n.t(item.label)}</ThemedText>
                  <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                    {item.value}
                  </ThemedText>
                </ThemedView>
              </ThemedView>
            )
          })
        }
      </ThemedView>

      <ThemedView style={{marginTop: 8}}>
        <RainbowDivider height={2}></RainbowDivider>
      </ThemedView>

      <ThemedView style={{flexDirection: 'row', marginTop: 2, justifyContent: 'center'}}>
        <ThemedView style={[styles.energyRow, {width: '21%'}]}>
          <ThemedView>
            <ThemedText style={[styles.summaryText, {marginBottom: 20, fontWeight: 'bold'}]}>
              {i18n.t('miscellania')}
            </ThemedText>
            {
              miscellaniaRow.map((item, index) => {
                return (
                  <ThemedView style={styles.listItem} key={index.toString()}>
                    <ThemedText style={styles.summaryText}>-  {i18n.t(item.label)}</ThemedText>
                    <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                      {item.value}
                    </ThemedText>
                  </ThemedView>
                )
              })
            }
          </ThemedView>
        </ThemedView>

        <ThemedView style={[styles.energyRow, {width: '78%'}]}>
          <ThemedView>
            <ThemedText style={[styles.summaryText, {marginBottom: 20, fontWeight: 'bold'}]}>
              {i18n.t('conditions')}
            </ThemedText>
            <ThemedView style={{flexDirection: 'row', gap: 45}}>
              <ThemedView>
                {
                  conditionFirstRow.map((item, index) => {
                    return (
                      <ThemedView style={styles.listItem} key={index.toString()}>
                        <ThemedText style={styles.summaryText}>-  {i18n.t(item.label)}</ThemedText>
                        <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                          {item.value}
                        </ThemedText>
                      </ThemedView>
                    )
                  })
                }
              </ThemedView>

              <ThemedView>
                {
                  conditionSecondRow.map((item, index) => {
                    return (
                      <ThemedView style={styles.listItem} key={index.toString()}>
                        <ThemedText style={styles.summaryText}>-  {i18n.t(item.label)}</ThemedText>
                        <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                          {item.value}
                        </ThemedText>
                      </ThemedView>
                    )
                  })
                }
              </ThemedView>

              <ThemedView>
                {
                  conditionThirdRow.map((item, index) => {
                    return (
                      <ThemedView style={styles.listItem} key={index.toString()}>
                        <ThemedText style={styles.summaryText}>-  {i18n.t(item.label)}</ThemedText>
                        <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                          {item.value}
                        </ThemedText>
                      </ThemedView>
                    )
                  })
                }
              </ThemedView>

              <ThemedView>
                {
                  conditionFourthRow.map((item, index) => {
                    return (
                      <ThemedView style={styles.listItem} key={index.toString()}>
                        <ThemedText style={styles.summaryText}>-  {i18n.t(item.label)}</ThemedText>
                        <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                          {item.value}
                        </ThemedText>
                      </ThemedView>
                    )
                  })
                }
              </ThemedView>
            </ThemedView>
            
          </ThemedView>
        </ThemedView>
      </ThemedView>

      <ThemedView style={{marginTop: 0}}>
        <RainbowDivider height={2}></RainbowDivider>
      </ThemedView>

      <ThemedText style={[styles.summaryText, {marginBottom: 20, fontWeight: 'bold', marginLeft: 20, marginTop: 2}]}>
        {i18n.t('weakness')}
      </ThemedText>

      <ThemedView style={{flexDirection: 'row', marginTop: 4, justifyContent: 'center', gap: 40}}>
        {
          weakFirstRow.map((item, index) => {
            return (
              <ThemedView style={styles.energyRow} key={index.toString()}>
                <ThemedView style={styles.flexRow}>
                  <Image source={item.image} style={[styles.energy, styles.summaryEnergy]}/>
                  <ThemedText style={[styles.summaryText]}>{i18n.t(item.label)}</ThemedText>
                  <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                    {item.value}
                  </ThemedText>
                </ThemedView>
              </ThemedView>
            )
          })
        }
      </ThemedView>
      <ThemedView style={{flexDirection: 'row', marginTop: 20, justifyContent: 'center', gap: 40, marginBottom: 8}}>
        {
          weakSecondRow.map((item, index) => {
            return (
              <ThemedView style={[styles.energyRow, {width: '16.6%'}]} key={index.toString()}>
                <ThemedView style={styles.flexRow}>
                  <Image source={item.image} style={[styles.energy, styles.summaryEnergy]}/>
                  <ThemedText style={[styles.summaryText]}>{i18n.t(item.label)}</ThemedText>
                  <ThemedText style={[styles.summaryText, {fontWeight: 'bold', color: 'black'}]}>
                    {item.value}
                  </ThemedText>
                </ThemedView>
              </ThemedView>
            )
          })
        }
      </ThemedView>
    </ThemedView>
  )
}