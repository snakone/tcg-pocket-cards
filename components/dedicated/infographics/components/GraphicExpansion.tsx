import { DimensionValue, FlatList } from 'react-native';
import { useCallback } from 'react';
import { Image } from 'expo-image';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useI18n } from '@/core/providers/LanguageProvider';
import RainbowDivider from '../RainbowDivider';
import { Colors } from '@/shared/definitions/utils/colors';
import { Card } from '@/shared/definitions/interfaces/card.interfaces';
import { getImageLanguage116x162 } from '@/shared/definitions/utils/functions';
import { CardGridStyles } from '@/shared/styles/component.styles';
import { LanguageType } from '@/shared/definitions/types/global.types';

import { 
  GENETIC_APEX, 
  GENETIC_APEX_PIKACHU_ICON, 
  GENETIC_APEX_MEWTWO_ICON, 
  GENETIC_APEX_CHARIZARD_ICON, 
  MYTHICAL_ISLAND_MEW_ICON, 
  SMACK_DOWN, 
  SMACK_DOWN_DIALGA_ICON, 
  SMACK_DOWN_PALKIA_ICON, 
  TRIUMPH_LIGHT_ARCEUS_ICON, 
  PROMO_A_ICON, 
  SHINING_REVELRY_ICON
} from '@/shared/definitions/sentences/path.sentences';

interface GraphicExpansionProps {
  styles: any;
  data: any;
  language: LanguageType;
}

const numColumns = 20;
const collageWith = 1240;

export const GraphicExpansion = ({styles, data, language}: GraphicExpansionProps) => {
  const {i18n} = useI18n();

  const renderItem = useCallback(({item, index}: {item: Card, index: number}) => {
    return (
      <ThemedView style={
          [{backgroundColor: Colors.light.background, height: 48}, 
          index > 19 && {boxShadow: '0px -2px 12px rgba(0, 0, 0, 0.7)'}
        ]}>
        <Image accessibilityLabel={item?.name[language]} 
                style={[
          CardGridStyles.image, 
          {width: 60, borderRadius: 4, height: 82}
        ]} 
        source={getImageLanguage116x162(language, item?.id)}/>
      </ThemedView>
    )
  }, []);

  function getItemWidth(length: number): DimensionValue {
    if (length >= 20) { return '100%'}
    return (length * 60) + 40;
  }

  const DATA: any[] = [
    {
      intro: {
        image: {
          href: GENETIC_APEX
        },
        label: 'genetic_apex',
        value: data.geneticPackCardsLength,
        description: 'genetic_apex_description',
        bottom: 20
      },
      shared: {
        value: data.sharedGeneticLength,
        list: data.sharedGenetic,
        divider: true,
      },
      packs: [
        {
          image: {
            href: GENETIC_APEX_PIKACHU_ICON,
            width: 92,
            height: 64
          },
          label: 'pikachu',
          value: data.pikachuCardsLength,
          list: data.pikachuCards,
          divider: true,
        },
        {
          image: {
            href: GENETIC_APEX_MEWTWO_ICON,
            width: 92,
            height: 64
          },
          label: 'mewtwo',
          value: data.mewtwoCardsLength,
          list: data.mewtwoCards,
          divider: true,
        },
        {
          image: {
            href: GENETIC_APEX_CHARIZARD_ICON,
            width: 92,
            height: 64
          },
          label: 'charizard',
          value: data.charizardCardsLength,
          list: data.charizardCards,
          divider: true,
        }
      ],
    },
    {
      intro: {
        image: {
          href: MYTHICAL_ISLAND_MEW_ICON,
          height: 48
        },
        label: 'mythical_island',
        value: data.islandPackCardsLength,
        description: 'mythical_island_description',
        bottom: 20
      },
      main: {
        list: data.islandCards,
        divider: true
      }
    },
    {
      intro: {
        image: {
          href: SMACK_DOWN,
          height: 44
        },
        label: 'smack_down',
        value: data.spacePackCardsLength,
        description: 'smack_down_description',
        bottom: 16
      },
      shared: {
        value: data.sharedSmackLength,
        list: data.sharedSmack,
        divider: true,
      },
      packs: [
        {
          image: {
            href: SMACK_DOWN_DIALGA_ICON,
            width: 92,
            height: 46
          },
          label: 'dialga',
          value: data.dialgaCardsLength,
          list: data.dialgaCards,
          divider: true,
        },
        {
          image: {
            href: SMACK_DOWN_PALKIA_ICON,
            width: 92,
            height: 46
          },
          label: 'palkia',
          value: data.palkiaCardsLength,
          list: data.palkiaCards,
          divider: true,
        }
      ],
    },
    {
      intro: {
        image: {
          href: TRIUMPH_LIGHT_ARCEUS_ICON,
          width: 92,
          height: 39,
        },
        label: 'arceus',
        value: data.triumphPackCardsLength,
        description: 'triumph_description',
        bottom: 20
      },
      main: {
        list: data.triumphCards,
        divider: true
      }
    },
    {
      intro: {
        image: {
          href: SHINING_REVELRY_ICON,
          width: 92,
          height: 39,
        },
        label: 'shining_revelry',
        value: data.shinyCardsLength,
        description: 'shining_revelry_description',
        bottom: 20
      },
      main: {
        list: data.shinyCards,
        divider: true
      }
    },
    {
      intro: {
        image: {
          href: PROMO_A_ICON,
          width: 94,
          height: 52,
          top: -9
        },
        label: 'promo_a',
        value: data.promoAPackCardsLength,
        description: 'promo_description',
        bottom: 20
      },
      main: {
        list: data.promoAPackCards,
        divider: true
      }
    },
    {
      intro: {
        image: {
          href: PROMO_A_ICON,
          width: 94,
          height: 52,
          top: -9
        },
        label: 'premium',
        value: data.premiumCardsLength,
        description: 'premium_description',
        bottom: 20
      },
      getWidth: true,
      main: {
        list: data.premiumCards,
        divider: true
      }
    },
    {
      intro: {
        image: {
          href: PROMO_A_ICON,
          width: 94,
          height: 52,
          top: -9
        },
        label: 'mission',
        value: data.specialCardsLength,
        description: 'mission_description',
        bottom: 20
      },
      getWidth: true,
      main: {
        list: data.specialCards,
        divider: true
      }
    },
  ];

  const seriesFirstRow = [
    {list: data.promo1Cards},
    {list: data.promo2Cards},
    {list: data.promo3Cards},
  ];

  const seriesSecondRow = [
    {list: data.promo4Cards},
    {list: data.promo5Cards},
  ];
  
  return (
    <>
      <ThemedText style={styles.subTitlte}>{i18n.t('expansions')}</ThemedText>

      {
        DATA.map((item, index) => {
          return (
            <ThemedView key={index.toString()}>
              {
                item.intro !== undefined &&
                <>
                  <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
                      <Image source={item.intro.image.href} 
                             style={[
                                styles.expansionImage, 
                                item.intro.image.width && {width: item.intro.image.width},
                                item.intro.image.height && {height: item.intro.image.height},
                                item.intro.image.top !== undefined && {top: item.intro.image.top},
                                {left: 16}
                              ]}>
                      </Image>
                      <ThemedText style={[styles.subTitlte, {marginBottom: 40, color: Colors.light.text}]}>{i18n.t(item.intro.label)}</ThemedText>
                    </ThemedView>
                    <ThemedText style={styles.subTitlte}>{item.intro.value}</ThemedText>
                  </ThemedView>
                  <ThemedText style={[styles.textMargin, {marginBottom: item.intro.bottom}]}>{i18n.t(item.intro.description)}</ThemedText>
                </>
              }

              {
                item.packs && item.packs.length > 0 &&
                item.packs.map((pack: any, index: number) => {
                  return (
                    <ThemedView key={index.toString()}>
                      <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
                          <Image source={pack.image.href} 
                                style={[
                                    styles.expansionImage, 
                                    pack.image.width && {width: pack.image.width},
                                    pack.image.height && {height: pack.image.height},
                                    {left: 16}
                                  ]}></Image>
                          <ThemedText style={[styles.subTitlte, {marginBottom: 40, color: Colors.light.text}]}>{i18n.t(pack.label)}</ThemedText>
                        </ThemedView>
                        <ThemedText style={styles.subTitlte}>{pack.value}</ThemedText>
                      </ThemedView>
                      <FlatList data={pack.list}
                                renderItem={renderItem}
                                numColumns={numColumns}
                                contentContainerStyle={styles.list}
                                style={{width: collageWith, borderRadius: 8}}
                                showsVerticalScrollIndicator={false}
                                keyExtractor={(item, index) => index + ''}/>  

                      {
                        pack.divider && <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>
                      }             
                    </ThemedView>

                  )
                })
              }
              {
                item.shared !== undefined &&
                <>
                  <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
                      <Image source={item.intro.image.href} style={[styles.expansionImage, {left: 16}]}></Image>
                      <ThemedText style={[styles.subTitlte, {marginBottom: 40, color: Colors.light.text}]}>{i18n.t('shareds')}</ThemedText>
                    </ThemedView>
                    <ThemedText style={styles.subTitlte}>{item.shared.value}</ThemedText>
                  </ThemedView>
                  <ThemedText style={[styles.textMargin, {marginBottom: 20}]}>{i18n.t('shareds_description')}</ThemedText>

                  <FlatList data={item.shared.list}
                            renderItem={renderItem}
                            numColumns={numColumns}
                            contentContainerStyle={styles.list}
                            style={{width: collageWith, borderRadius: 8}}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item, index) => index + ''}/>

                  {
                    item.shared.divider && <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>
                  } 
                </>
              }

              {
                item.main !== undefined &&
                <>
                  <FlatList data={item.main.list}
                            renderItem={renderItem}
                            numColumns={numColumns}
                            contentContainerStyle={styles.list}
                            style={[{width: collageWith, borderRadius: 8}, item.getWidth && {width: getItemWidth(item.main.list.length)}]}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item, index) => index + ''}/>

                  {
                    item.main.divider && <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>
                  } 
                </>
              }
            </ThemedView>
          )
        })
      }
      
      <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
          <Image source={PROMO_A_ICON} style={[styles.expansionImage, {width: 94, height: 52, top: -9, left: 16}]}></Image>
          <ThemedText style={[styles.subTitlte, {marginBottom: 40, color: Colors.light.text}]}>{i18n.t('series')}</ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedText style={[styles.text, {marginBottom: 10}]}>{i18n.t('series_description')}</ThemedText>

      <ThemedView style={{flexDirection: "row", gap: 20}}>
        {
          seriesFirstRow.map((series, index) => {
            return (
              <ThemedView key={index.toString()}>
                <ThemedText style={[styles.subTitlte, {marginTop: 10, color: Colors.light.text}]}>A{index +1}</ThemedText>
                <FlatList data={series.list}
                          renderItem={renderItem}
                          numColumns={numColumns}
                          contentContainerStyle={[styles.list, {width: 'auto'}]}
                          style={{borderRadius: 8}}
                          showsVerticalScrollIndicator={false}
                          keyExtractor={(item, index) => index + ''}/>
              </ThemedView>
            )
          })
        }
      </ThemedView>

      <ThemedView style={{flexDirection: "row", gap: 20, width: '64.8%'}}>
        {
          seriesSecondRow.map((series, index) => {
            return (
              <ThemedView key={index.toString()}>
                <ThemedText style={[styles.subTitlte, {marginTop: 0, color: Colors.light.text}]}>A{seriesFirstRow.length + index + 1}</ThemedText>
                <FlatList data={series.list}
                          renderItem={renderItem}
                          numColumns={numColumns}
                          contentContainerStyle={[styles.list, {width: 'auto'}]}
                          style={{borderRadius: 8}}
                          showsVerticalScrollIndicator={false}
                          keyExtractor={(item, index) => index + ''}/>
              </ThemedView>
            )
          })
        }
      </ThemedView>

      <RainbowDivider style={{marginBlock: 10}}></RainbowDivider>
    </>
  )
}