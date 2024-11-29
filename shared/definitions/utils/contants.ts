import { PressableAndroidRippleConfig } from "react-native";
import { ItemWithRoute, SortItem } from "../interfaces/layout.interfaces";
import { Card } from "../interfaces/card.interfaces";

import { 
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
  NORMAL_ICON 
} from "../sentences/path.sentences";
import { FilterSearch } from "../classes/filter.class";

export const MENU_WIDTH = 250;
export const PAGE_TITLE = "TCG Pocket Cards";
export const LOCAL_HOST = 'http://192.168.1.71:3000';
export const DEFAULT_LANG = 'es';
export const FILTER_CARDS_HEIGHT = 350;

export const RIPPLE_CONFIG: PressableAndroidRippleConfig = {
  color: 'rgba(0, 0, 0, .32)', 
  borderless: true, 
  foreground: false, 
  radius: 58
}

export const CARD_IMAGE_MAP: any = {
  "1": require('@/assets/cards/en/Genetic Apex/cPK_10_000010_00_FUSHIGIDANE_C.png'),
  '2': require("@/assets/cards/en/Genetic Apex/cPK_10_000020_00_FUSHIGISOU_U.png"),
  '3': require("@/assets/cards/en/Genetic Apex/cPK_10_000030_00_FUSHIGIBANA_R.png"),
  '4' :require("@/assets/cards/en/Genetic Apex/cPK_10_000040_00_FUSHIGIBANAex_RR.png"),
  '5': require("@/assets/cards/en/Genetic Apex/cPK_10_000050_00_CATERPIE_C.png"),
  '6': require("@/assets/cards/en/Genetic Apex/cPK_10_000060_00_TRANSEL_C.png"),
  '7': require("@/assets/cards/en/Genetic Apex/cPK_10_000070_00_BUTTERFREE_R.png"),
  '8': require("@/assets/cards/en/Genetic Apex/cPK_10_000080_00_BEEDLE_C.png"),
  '9': require("@/assets/cards/en/Genetic Apex/cPK_10_000090_00_COCOON_C.png"),
  '10': require("@/assets/cards/en/Genetic Apex/cPK_10_000100_00_SPEAR_R.png"),
  '11': require("@/assets/cards/en/Genetic Apex/cPK_10_000110_00_NAZONOKUSA_C.png"),
  '12': require("@/assets/cards/en/Genetic Apex/cPK_10_000120_00_KUSAIHANA_U.png"),
  '13': require("@/assets/cards/en/Genetic Apex/cPK_10_000130_00_RUFFRESIA_R.png"),
  '14': require("@/assets/cards/en/Genetic Apex/cPK_10_000140_00_PARAS_C.png"),
  '15': require("@/assets/cards/en/Genetic Apex/cPK_10_000150_00_PARASECT_U.png"),
  '16': require("@/assets/cards/en/Genetic Apex/cPK_10_000160_00_KONGPANG_C.png"),
  '17': require("@/assets/cards/en/Genetic Apex/cPK_10_000170_00_MORPHON_U.png"),
  '18': require("@/assets/cards/en/Genetic Apex/cPK_10_000180_00_MADATSUBOMI_C.png"),
  '19': require("@/assets/cards/en/Genetic Apex/cPK_10_000190_00_UTSUDON_U.png"),
  '20': require("@/assets/cards/en/Genetic Apex/cPK_10_000200_00_UTSUBOT_R.png"),
  '21': require("@/assets/cards/en/Genetic Apex/cPK_10_000210_00_TAMATAMA_C.png"),
  '22': require("@/assets/cards/en/Genetic Apex/cPK_10_000220_00_NASSY_R.png"),
  '23': require("@/assets/cards/en/Genetic Apex/cPK_10_000230_00_NASSYex_RR.png"),
  '24': require("@/assets/cards/en/Genetic Apex/cPK_10_000240_00_MONJARA_C.png"),
  '25': require("@/assets/cards/en/Genetic Apex/cPK_10_000250_00_STRIKE_C.png"),
  '26': require("@/assets/cards/en/Genetic Apex/cPK_10_000260_00_KAILIOS_U.png"),
  '27': require("@/assets/cards/en/Genetic Apex/cPK_10_000270_00_MONMEN_C.png"),
  '28': require("@/assets/cards/en/Genetic Apex/cPK_10_000280_00_ELFUUN_U.png"),
  '29': require("@/assets/cards/en/Genetic Apex/cPK_10_000290_00_CHURINE_C.png"),
  '30': require("@/assets/cards/en/Genetic Apex/cPK_10_000300_00_DREDEAR_U.png"),
  '31': require("@/assets/cards/en/Genetic Apex/cPK_10_000310_00_MEECLE_C.png"),
  '32': require("@/assets/cards/en/Genetic Apex/cPK_10_000320_00_GOGOAT_C.png"),
  '33': require("@/assets/cards/en/Genetic Apex/cPK_10_000330_00_HITOKAGE_C.png"),
  '34': require("@/assets/cards/en/Genetic Apex/cPK_10_000340_00_LIZARDO_U.png"),
  '35': require("@/assets/cards/en/Genetic Apex/cPK_10_000350_00_LIZARDON_R.png"),
  '36': require("@/assets/cards/en/Genetic Apex/cPK_10_000360_00_LIZARDONex_RR.png"),
  '37': require("@/assets/cards/en/Genetic Apex/cPK_10_000370_00_ROKON_C.png"),
  '38': require("@/assets/cards/en/Genetic Apex/cPK_10_000380_00_KYUKON_U.png"),
  '39': require("@/assets/cards/en/Genetic Apex/cPK_10_000390_00_GARDIE_C.png"),
  '40': require("@/assets/cards/en/Genetic Apex/cPK_10_000400_00_WINDIE_R.png"),
  '41': require("@/assets/cards/en/Genetic Apex/cPK_10_000410_00_WINDIEex_RR.png"),
  '42': require("@/assets/cards/en/Genetic Apex/cPK_10_000420_00_PONYTA_C.png"),
  '43': require("@/assets/cards/en/Genetic Apex/cPK_10_000430_00_GALLOP_U.png"),
  '44': require("@/assets/cards/en/Genetic Apex/cPK_10_000440_00_BOOBER_C.png"),
  '45': require("@/assets/cards/en/Genetic Apex/cPK_10_000450_00_BOOSTER_R.png"),
  '46': require("@/assets/cards/en/Genetic Apex/cPK_10_000460_00_FIRE_R.png"),
  '47': require("@/assets/cards/en/Genetic Apex/cPK_10_000470_00_FIREex_RR.png"),
  '48': require("@/assets/cards/en/Genetic Apex/cPK_10_000480_00_KUITARAN_C.png"),
  '49': require("@/assets/cards/en/Genetic Apex/cPK_10_000490_00_YATOUMORI_C.png"),
  '50': require("@/assets/cards/en/Genetic Apex/cPK_10_000500_00_ENNEWT_C.png"),
  '51': require("@/assets/cards/en/Genetic Apex/cPK_10_000510_00_YAKUDE_C.png"),
  '52': require("@/assets/cards/en/Genetic Apex/cPK_10_000520_00_MARUYAKUDE_U.png"),
  '53': require("@/assets/cards/en/Genetic Apex/cPK_10_000530_00_ZENIGAME_C.png"),
  '54': require("@/assets/cards/en/Genetic Apex/cPK_10_000540_00_KAMEIL_U.png"),
  '55': require("@/assets/cards/en/Genetic Apex/cPK_10_000550_00_KAMEX_R.png"),
  '56': require("@/assets/cards/en/Genetic Apex/cPK_10_000560_00_KAMEXex_RR.png"),
  '57': require("@/assets/cards/en/Genetic Apex/cPK_10_000570_00_KODUCK_C.png"),
  '58': require("@/assets/cards/en/Genetic Apex/cPK_10_000580_00_GOLDUCK_U.png"),
  '59': require("@/assets/cards/en/Genetic Apex/cPK_10_000590_00_NYOROMO_C.png"),
  '60': require("@/assets/cards/en/Genetic Apex/cPK_10_000600_00_NYOROZO_U.png"),
  '61': require("@/assets/cards/en/Genetic Apex/cPK_10_000610_00_NYOROBON_R.png"),
  '62': require("@/assets/cards/en/Genetic Apex/cPK_10_000620_00_MENOKURAGE_C.png"),
  '63': require("@/assets/cards/en/Genetic Apex/cPK_10_000630_00_DOKUKURAGE_U.png"),
  '64': require("@/assets/cards/en/Genetic Apex/cPK_10_000640_00_PAWOU_C.png"),
  '65': require("@/assets/cards/en/Genetic Apex/cPK_10_000650_00_JUGON_U.png"),
  '66': require("@/assets/cards/en/Genetic Apex/cPK_10_000660_00_SHELLDER_C.png"),
  '67': require("@/assets/cards/en/Genetic Apex/cPK_10_000670_00_PARSHEN_U.png"),
  '68': require("@/assets/cards/en/Genetic Apex/cPK_10_000680_00_CRAB_C.png"),
  '69': require("@/assets/cards/en/Genetic Apex/cPK_10_000690_00_KINGLER_U.png"),
  '70': require("@/assets/cards/en/Genetic Apex/cPK_10_000700_00_TATTU_C.png"),
  '71': require("@/assets/cards/en/Genetic Apex/cPK_10_000710_00_SEADRA_U.png"),
  '72': require("@/assets/cards/en/Genetic Apex/cPK_10_000720_00_TOSAKINTO_C.png"),
  '73': require("@/assets/cards/en/Genetic Apex/cPK_10_000730_00_AZUMAO_C.png"),
  '74': require("@/assets/cards/en/Genetic Apex/cPK_10_000740_00_HITODEMAN_C.png"),
  '75': require("@/assets/cards/en/Genetic Apex/cPK_10_000750_00_STARMIE_U.png"),
  '76': require("@/assets/cards/en/Genetic Apex/cPK_10_000760_00_STARMIEex_RR.png"),
  '77': require("@/assets/cards/en/Genetic Apex/cPK_10_000770_00_KOIKING_C.png"),
  '78': require("@/assets/cards/en/Genetic Apex/cPK_10_000780_00_GYARADOS_R.png"),
  '79': require("@/assets/cards/en/Genetic Apex/cPK_10_000790_00_LAPLACE_R.png"),
  '80': require("@/assets/cards/en/Genetic Apex/cPK_10_000800_00_SHOWERS_R.png"),
  '81': require("@/assets/cards/en/Genetic Apex/cPK_10_000810_00_OMNITE_U.png"),
  '82': require("@/assets/cards/en/Genetic Apex/cPK_10_000820_00_OMSTAR_R.png"),
  '83': require("@/assets/cards/en/Genetic Apex/cPK_10_000830_00_FREEZER_R.png"),
  '84': require("@/assets/cards/en/Genetic Apex/cPK_10_000840_00_FREEZERex_RR.png"),
  '85': require("@/assets/cards/en/Genetic Apex/cPK_10_000850_00_KOARUHIE_C.png"),
  '86': require("@/assets/cards/en/Genetic Apex/cPK_10_000860_00_SWANNA_U.png"),
  '87': require("@/assets/cards/en/Genetic Apex/cPK_10_000870_00_KEROMATSU_C.png"),
  '88': require("@/assets/cards/en/Genetic Apex/cPK_10_000880_00_GEKOGASHIRA_U.png"),
  '89': require("@/assets/cards/en/Genetic Apex/cPK_10_000890_00_GEKKOUGA_R.png"),
  '90': require("@/assets/cards/en/Genetic Apex/cPK_10_000900_00_NAMAKOBUSHI_C.png"),
  '91': require("@/assets/cards/en/Genetic Apex/cPK_10_000910_00_HAGIGISHIRI_U.png"),
  '92': require("@/assets/cards/en/Genetic Apex/cPK_10_000920_00_YUKIHAMI_C.png"),
  '93': require("@/assets/cards/en/Genetic Apex/cPK_10_000930_00_MOTHNOW_U.png"),
};

export const LIST: ItemWithRoute[] = [
  { label: 'decks', icon: 'wind', route: '' },
  { label: 'expansions', icon: 'note', route: '' },
  { label: 'favorites', icon: 'star', route: '' },
];

export const HELP: ItemWithRoute[] = [
  { label: 'config', icon: 'washer.circle', route: 'settings' },
  { label: 'help', icon: 'questionmark.app.fill', route: 'help' },
];

export const SORT_FIELD_MAP: Record<string, keyof Card> = {
  order_by_number: 'number',
  order_by_type: 'element',
  order_by_rarity: 'rarity',
  order_by_pokedex: 'pokedex',
  order_by_retreat: 'retreat',
  order_by_hp: 'health',
  order_by_stage: 'stage'
};

export function getFilterSearch(): FilterSearch {
  return new FilterSearch();
}

export const INITIAL_SORT_DATA: SortItem[] = [
  { id: 1, label: 'order_by_number', icon: 'content-paste-search', active: true, order: 'asc' },
  { id: 2, label: 'order_by_type', icon: 'stars', active: false, order: 'desc' },
  { id: 3, label: 'order_by_rarity', icon: 'diamond', active: false, order: 'desc' },
  { id: 4, label: 'order_by_pokedex', icon: 'smartphone', active: false, order: 'desc' },
  { id: 5, label: 'order_by_retreat', icon: 'grass', active: false, order: 'desc' },
  { id: 6, label: 'order_by_hp', icon: 'favorite-outline', active: false, order: 'desc' },
  { id: 7, label: 'order_by_stage', icon: 'pets', active: false, order: 'desc' },
];

export const RARITY_MAP: any = {
  0: { image: NORMAL_RARITY, amount: 1 },
  1: { image: NORMAL_RARITY, amount: 2 },
  2: { image: NORMAL_RARITY, amount: 3 },
  3: { image: NORMAL_RARITY, amount: 4 },
  4: { image: STAR_RARITY, amount: 1 },
  5: { image: STAR_RARITY, amount: 2 },
  6: { image: STAR_RARITY, amount: 3 },
  7: { image: CROWN_RARITY, amount: 1 },
  8: { image: null, amount: 0 },
}

export const TYPE_MAP: any = {
  0: { image: GRASS_ICON, label: 'grass' },
  1: { image: FIRE_ICON, label: 'fire' },
  2: { image: WATER_ICON, label: 'water' },
  3: { image: ELECTRIC_ICON, label: 'electric' },
  4: { image: PSYCHIC_ICON, label: 'psychic' },
  5: { image: FIGHT_ICON, label: 'fight' },
  6: { image: DARK_ICON, label: 'dark' },
  7: { image: STEEL_ICON, label: 'steel' },
  8: { image: DRAGON_ICON, label: 'dragon' },
  9: { image: NORMAL_ICON, label: 'normal' },
}

export const STAGE_MAP: any = {
  0: { label: 'basic' },
  1: { label: 'stage_one' },
  2: { label: 'stage_two' },
  3: { label: 'object' },
  4: { label: 'tool' },
  5: { label: 'fossil' },
  6: { label: 'supporter' },
}

export const DAMAGES = Array.from({ length: 30 }, (_, index) => (index + 1) * 10);

export const iconWidth = 36;

export function getDaysRemaining(): { progress: number; remainingText: string } {
  const target = new Date(2025, 0, 29); 
  const start = new Date(2024, 10, 25);
  const today = new Date();
  const diff = target.getTime() - today.getTime();
  const totalDiff = target.getTime() - start.getTime();
  const remainingDays = Math.ceil(diff / (1000 * 3600 * 24));
  const elapsedDiff = today.getTime() - start.getTime();
  const elapsedDays = Math.ceil(elapsedDiff / (1000 * 3600 * 24));
  const progress = (elapsedDays / (totalDiff / (1000 * 3600 * 24))) * 100;
  const hours = Math.floor((diff % (1000 * 3600 * 24)) / (1000 * 3600));
  const remainingText = `${remainingDays} d ${hours} h`;

  return { progress, remainingText };
}