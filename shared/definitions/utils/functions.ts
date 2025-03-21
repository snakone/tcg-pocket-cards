import { Platform } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import CryptoJS from "crypto-js";
import CryptoES from 'crypto-es';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import * as DocumentPicker from 'expo-document-picker';

import { FilterSearch } from "../classes/filter.class";
import { Attack, Card } from "../interfaces/card.interfaces";
import { SortItem } from "../interfaces/layout.interfaces";
import { CardExpansionENUM, CardLanguageENUM } from "../enums/card.enums";
import { GENETIC_APEX, MYTHICAL_ISLAND_MEW_ICON, PROMO_A_ICON, SMACK_DOWN, TRIUMPH_LIGHT_ARCEUS_ICON } from "../sentences/path.sentences";
import { PACK_MAP } from "./constants";
import { LanguageType } from "../types/global.types";
import { FilterAttackSearch } from "../classes/filter_attack.class";
import { UserCollection } from "../interfaces/global.interfaces";

import { 
  CARD_IMAGE_MAP_116x162_EN, 
  CARD_IMAGE_MAP_116x162_ES, 
  CARD_IMAGE_MAP_116x162_JAP, 
  CARD_IMAGE_MAP_69x96_EN, 
  CARD_IMAGE_MAP_69x96_ES, 
  CARD_IMAGE_MAP_69x96_JAP, 
  CARD_IMAGE_MAP_EN, 
  CARD_IMAGE_MAP_ES, 
  CARD_IMAGE_MAP_JAP
} from "./card.images";

export function sortCards(field: keyof Card | string, data: Card[], sort: SortItem): Card[] {
  return [...data].sort((a, b) => {
    let aValue: any = '';
    let bValue: any = '';

    if (field === 'height' || field === 'weight') {
      aValue = ((a?.info as any) && Number((a?.info as any)[field]['es'])) ?? '';
      bValue = ((b?.info as any) && Number((b?.info as any)[field]['es'])) ?? '';
    } else {
      aValue = (a as any)[field] ?? '';
      bValue = (b as any)[field] ?? '';
    }

    if (aValue === -1 && bValue !== -1) return 1;
    if (bValue === -1 && aValue !== -1) return -1;

    if (field === 'rarity') {
      if (aValue === 0 && bValue !== 0) return 1;
      if (bValue === 0 && aValue !== 0) return -1;
    }

    if (aValue < bValue) return sort.order === 'asc' ? -1 : 1;
    if (aValue > bValue) return sort.order === 'asc' ? 1 : -1;

    const numberA = a.order ?? 0;
    const numberB = b.order ?? 0;
    if (numberA < numberB) return -1;
    if (numberA >= numberB) return 1;

    return 0;
  });
}

export function sortAttacks(field: keyof Attack | string, data: Attack[], sort: SortItem, lang: LanguageType): Attack[] {
  return [...data].sort((a, b) => {
    let aValue: any = '';
    let bValue: any = '';

    if (field === 'name') {
      aValue = (a as any)[field][lang] ?? '';
      bValue = (b as any)[field][lang] ?? '';
    } else if (field === 'number_energy') {
      aValue = a.energy.length ?? '';
      bValue = b.energy.length ?? '';
    } else {
      aValue = (a as any)[field] ?? '';
      bValue = (b as any)[field] ?? '';
    }

    if (aValue === -1 && bValue !== -1) return 1;
    if (bValue === -1 && aValue !== -1) return -1;

    if (aValue < bValue) return sort.order === 'asc' ? -1 : 1;
    if (aValue > bValue) return sort.order === 'asc' ? 1 : -1;

    const numberA = a.id ?? 0;
    const numberB = b.id ?? 0;

    if (numberA < numberB) return -1;
    if (numberA >= numberB) return 1;

    return 0;
  });
}

export function filterCards(
  filter: FilterSearch, 
  data: Card[], 
  favorites: number[], 
  collection?: UserCollection[],
  collectionLang?: CardLanguageENUM
): Card[] {
  return data.filter(card => {
    if (
      filter.favorite.included !== null &&
      !favorites?.includes(card.id) &&
      filter.favorite.included != filter.favorite.not_favorite
    ) return false;

    if (collection && collectionLang !== undefined) {
      const item = collection.find(coll => coll.id === card.id);
      if (
        filter.collection.owned !== null &&
        ((item && item.amount[collectionLang] <= 0) || !item) &&
        filter.collection.owned != filter.collection.not_owned
      ) {
        return false;
      }

      if (
        filter.collection.not_owned !== null &&
        ((item && item.amount[collectionLang] > 0)) &&
        filter.collection.not_owned != filter.collection.owned
      ) {
        return false;
      }
    }

    if (
      filter.favorite.not_favorite !== null &&
      favorites?.includes(card.id) && 
      filter.favorite.not_favorite != filter.favorite.included
    ) return false;

    if (
      filter.ability.with_ability !== null &&
      filter.ability.with_ability !== !!card.ability &&
      filter.ability.with_ability != filter.ability.without_ability
    ) return false;

    if (
      filter.ability.without_ability !== null &&
      filter.ability.without_ability === !!card.ability && 
      filter.ability.with_ability != filter.ability.without_ability
    ) return false;

    const rarity = Object.keys(filter.rarity).filter(key => Boolean((filter.rarity as any)[key]));
    
    if(rarity.length > 0 && !rarity.includes(String(card.rarity))) {
      return false;
    }

    const element = Object.keys(filter.element).filter(key => Boolean((filter.element as any)[key]));
    
    if(element.length > 0 && !element?.includes(String(card.element))) {
      return false;
    }

    if (card.health && 
      (filter.health.min !== null && 
      filter.health.min > 0 &&
      filter.health.min > card.health)
    ) {
      return false;
    }

    if (
      card.health &&
      filter.health.max !== null && 
      filter.health.max > 0 &&
      filter.health.max < card.health 
    ) {
      return false;
    }

    if(
      filter.attack.max !== null && 
      filter.attack.max > 0 ||
      filter.attack.min !== null && 
      filter.attack.min > 0
    ) {

      if (!card.attacks || (card.attacks?.length === 1 && card.attacks[0].damage === 0)) {
        return false;
      }

      const lower = Math.min(...card.attacks!.map(att => att.damage).filter(k => Boolean(k)));
      const upper = Math.max(...card.attacks!.map(att => att.damage).filter(k => Boolean(k)));

      if (filter.attack.min && lower < filter.attack.min) {
        return false;
      }

      if (filter.attack.max && upper > filter.attack.max) {
        return false;
      }
    }

    const stage = Object.keys(filter.stage).filter(key => Boolean((filter.stage as any)[key]));
    
    if(stage.length > 0 && !stage?.includes(String(card.stage))) {
      return false;
    }

    const expansion = Object.keys(filter.expansion).filter(key => Boolean((filter.expansion as any)[key]));

    const isMewInmersive = card.id === 283 && card.name.es === 'Mew';
    const allGenetic = ['0', '1', '2'].every(num => expansion.includes(num));
    
    if((expansion.length > 0 && !card.found?.some(pack => expansion?.includes(String(pack)))) && !(isMewInmersive && allGenetic)) {
      return false;
    }

    const weakenss = Object.keys(filter.weak).filter(key => Boolean((filter.weak as any)[key]));
    
    if(weakenss.length > 0 && !weakenss?.includes(String(card.weak))) {
      return false;
    }

    if (
      filter.ex.is_ex !== null &&
      filter.ex.is_ex !== !!card.isEX &&
      filter.ex.is_ex != filter.ex.not_ex
    ) return false;

    if (
      filter.ex.not_ex !== null &&
      filter.ex.not_ex === !!card.isEX && 
      filter.ex.not_ex != filter.ex.is_ex
    ) return false;

    const conditions = Object.keys(filter.condition).filter(key => Boolean((filter.condition as any)[key]));

    if(conditions.length > 0 && !card.condition?.some(condition => conditions?.includes(String(condition)))) {
      return false;
    }

    return true;
  });
}

export function filterAttacks(filter: FilterAttackSearch, data: Attack[]): Attack[] {
  return data.filter(attack => {
    const energy = Object.keys(filter.energy).filter(key => Boolean((filter.energy as any)[key])).map(key => Number(key));

    if (filter.exclusive) {
      if (!(energy.every(item => attack.energy.includes(item)) && attack.energy.every(item => energy.includes(item)))) {
        return false;
      }
    } else {
      if(energy.length > 0 && !energy.every(en => attack.energy.includes(en))) {
        return false;
      }
    }
    
    if(
      filter.damage.max !== null && 
      filter.damage.max > 0 ||
      filter.damage.min !== null && 
      filter.damage.min > 0
    ) {

      if (attack.damage === 0) {
        return false;
      }

      if (filter.damage.min && (attack.damage < filter.damage.min)) {
        return false;
      }

      if (filter.damage.max && (attack.damage > filter.damage.max)) {
        return false;
      }
    }

    return true;
  });
}

export function isEmptyObject(obj: any): boolean {
  return obj && typeof obj === 'object' && Object.keys(obj).length === 0;
}

export function handleWebInit(): void {
  if (Platform.OS !== 'web') return;
  require('@/shared/styles/web_styles.css');
}

export function forceShowSplash(
  navigation: NavigationProp<ReactNavigation.RootParamList>
): boolean {
  const state = navigation.getState();
  return state && 
         state.routes && 
         state.routes[1]?.params && 
         (state.routes[1].params as any).show === 'true';
}

export function getCardPackFrom(card: Card): {image: any, width: number, height: number} | undefined {
  if (card.expansion === CardExpansionENUM.GENETIC_APEX) {
    if (card.found?.length === 3 || (card.name.en === 'Mew' && card.id === 283)) {
      return {image: GENETIC_APEX, width: 68, height: 30};
    } else if (card.found !== undefined) {
      return {image: PACK_MAP[card.found[0]], width: 60, height: 45};
    }
  } else if (card.expansion === CardExpansionENUM.PROMO_A) {
    return {image: PROMO_A_ICON, width: 74, height: 40};
  } else if (card.expansion === CardExpansionENUM.MYTHICAL_ISLAND) {
    return {image: MYTHICAL_ISLAND_MEW_ICON, width: 74, height: 36};
  } else if (card.expansion === CardExpansionENUM.SPACE_TIME_SMACKDOWN) {
    if (card.found?.length === 2) {
      return {image: SMACK_DOWN, width: 74, height: 36};
    } else if (card.found !== undefined) {
      return {image: PACK_MAP[card.found[0]], width: 81, height: 40};
    }
  } else if (card.expansion === CardExpansionENUM.TRIUMPH_LIGHT) {
    return {image: TRIUMPH_LIGHT_ARCEUS_ICON, width: 95, height: 39};
  }
}

export function isNotBattleCard(card: Card): boolean {
  return card.pokedex === -1 || card.element === -1;
}

export function isCardPromo(card: Card): boolean {
  return card.expansion === CardExpansionENUM.PROMO_A;
}

export function isCardPromoAndNoBattle(card: Card): boolean {
  return isNotBattleCard(card) && isCardPromo(card);
}

export function isCardPromoAndBattle(card: Card): boolean {
  return !isNotBattleCard(card) && isCardPromo(card);
}

export function convertBase64ToJpeg(base64Png: string, quality = 1): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      const jpegBase64 = canvas.toDataURL('image/jpeg', quality);
      resolve(jpegBase64);
    };
    img.onerror = reject;
    img.src = base64Png;
  });
}

export const filterUniqueItems = (array: Card[]): { items: Card[]; ids: number[] } => {
  const uniqueMap = new Map<string, Card>();
  const filteredIdsSet = new Set<number>();

  array.forEach((item) => {
    const uniqueKey = `${item.id}-${item.name}`;
    if (!uniqueMap.has(uniqueKey)) {
      uniqueMap.set(uniqueKey, item);
    } else {
      filteredIdsSet.add(item.id);
    }
  });

  return {
    items: Array.from(uniqueMap.values()),
    ids: Array.from(filteredIdsSet),
  };
};

export const getDynamicHeight = (length: number, type: 'deck' | 'trade'): number => {
  const maxHeight = 2229;
  const minHeight = 1225;
  const midHeight = 1633;

  if (type === 'trade') { return minHeight; }

  if (length <= 10) {
    return minHeight;
  } else if (length <= 15) {
    return midHeight;
  } else if (length <= 20) {
    return maxHeight;
  } else {
    throw new Error("TotalLength must be between 1 and 20.");
  }
};

export const formatDate = (date: Date, language: LanguageType) => {
  const newDate = new Date(date);
  const day = new Intl.DateTimeFormat(language, { day: '2-digit' }).format(newDate);
  const month = new Intl.DateTimeFormat(language, { month: '2-digit' }).format(newDate);
  const year = new Intl.DateTimeFormat(language, { year: 'numeric' }).format(newDate);
  const hours = new Intl.DateTimeFormat(language, { hour: '2-digit', hour12: false }).format(newDate);
  const minutes = new Intl.DateTimeFormat(language, { minute: '2-digit' }).format(newDate);

  const languageSwitch = {
    es: `${day}/${month}/${year} a las ${hours}:${minutes}`,
    en: `${month}/${day}/${year} at ${hours}:${minutes}`,
    ja: `${year}${month}${day}${hours}:${minutes}`,
  }

  return languageSwitch[language];
};

export function encryptDataWeb(data: any): string {
  const jsonString = JSON.stringify(data);
  return CryptoJS.AES.encrypt(jsonString, String(process.env.EXPO_PUBLIC_CRYPTO_KEY)).toString();
};

export function encryptDataAndroid(data: any): string {
  const jsonString = JSON.stringify(data);
  return CryptoES.AES.encrypt(jsonString, String(process.env.EXPO_PUBLIC_CRYPTO_KEY)).toString();
}

export function decryptDataWeb(data: any): any {
  const key = String(process.env.EXPO_PUBLIC_CRYPTO_KEY);
  const decrypted = CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8);
  return JSON.parse(decrypted);
};

export function decryptDataAndroid(data: any): any {
  const key = String(process.env.EXPO_PUBLIC_CRYPTO_KEY);
  const decrypted = CryptoES.AES.decrypt(data, key).toString(CryptoES.enc.Utf8);
  return JSON.parse(decrypted);
}

export function saveEncryptedFileWeb(
  data: any, 
  filename = "pocket-cards-backup.tcg"
): Promise<void> {
  return new Promise((res) => {
    if (Platform.OS !== 'web') { return ; }
    delete data.cards;
    const encryptedData = encryptDataWeb(data);
    const blob = new Blob([encryptedData], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return res;
  });
};

export async function saveEncryptedFileAndroid(
  data: any,
  filename = "pocket-cards-backup.tcg"
) {
  if(Platform.OS === 'android') {
    const encrypt = encryptDataAndroid(data);
    const fileUri = `${FileSystem.documentDirectory}${filename}`;
    await FileSystem.writeAsStringAsync(fileUri, encrypt);
    await Sharing.shareAsync(fileUri);
  }
}

export async function importEncryptedFileWeb(): Promise<string> {
  return new Promise((res, rej) => {
    if (Platform.OS !== 'web') { return ; }
    
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.tcg';

    input.onchange = async (event: any) => {
      const file = event?.target?.files[0];
      if (file) {
        const reader = new FileReader();

        reader.onload = () => {
          if(reader.result) {
            res((reader.result as string))
          }
        };

        reader.onerror = (err) => {
          console.log(err);
          rej(err);
        };

        reader.readAsText(file);
      }
    };

    input.click();
    return res;
  });
};

export async function importEncryptedFileAndroid(): Promise<string> {
  return new Promise(async (res, rej) => {
    if (Platform.OS !== 'android') { return ; }

    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'application/*',
        copyToCacheDirectory: false,
      });

      if (result.canceled) {
        return;
      }

      if (result.assets) {
        const response = await FileSystem.readAsStringAsync(result.assets[0].uri);
        res(response);
      }
    } catch (error) {
      console.error('Error al seleccionar el archivo', error);
      rej(error);
    }
  })
}

export function isObjectSettings(obj: any): boolean {
  if (typeof obj !== 'object') { return false; }
  if (Object.keys(obj).length === 0) { return false; }
  if (!(obj as Object).hasOwnProperty('version')) { return false; }
  if (!(obj as Object).hasOwnProperty('language')) { return false; }

  return true;
}

const IMAGE_LANGUAGE_MAP = {
  es: CARD_IMAGE_MAP_ES,
  en: CARD_IMAGE_MAP_EN,
  ja: CARD_IMAGE_MAP_JAP
}

export function getImageLanguage(lang: LanguageType, id: number): any {
  return IMAGE_LANGUAGE_MAP[lang][id];
}

const IMAGE_LANGUAGE_MAP_69x96 = {
  es: CARD_IMAGE_MAP_69x96_ES,
  en: CARD_IMAGE_MAP_69x96_EN,
  ja: CARD_IMAGE_MAP_69x96_JAP
}

export function getImageLanguage69x96(lang: LanguageType, id: number): any {
  return IMAGE_LANGUAGE_MAP_69x96[lang][id];
}

const IMAGE_LANGUAGE_MAP_116x162 = {
  es: CARD_IMAGE_MAP_116x162_ES,
  en: CARD_IMAGE_MAP_116x162_EN,
  ja: CARD_IMAGE_MAP_116x162_JAP
}

export function getImageLanguage116x162(lang: LanguageType, id: number): any {
  return IMAGE_LANGUAGE_MAP_116x162[lang][id];
}

export function fillWithZeros(value: number): string {
  return String(value).padStart(4, '0');
}

const METRICS_MAP: any = {
  height: {
    es: 'm',
    en: '',
    ja: 'm'
  },
  weight: {
    es: 'Kg',
    en: 'lbs.',
    ja: 'Kg'
  }
}

export function getMetrics(type: 'height' | 'weight', lang: LanguageType): string {
  return METRICS_MAP[type][lang];
}

export function areAllAmountsZero(collection: UserCollection): boolean {
  return Object.values(collection.amount).every(value => value === 0);
}