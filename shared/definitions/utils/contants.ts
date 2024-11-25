import { PressableAndroidRippleConfig } from "react-native";
import { ItemWithRoute } from "../interfaces/layout.interfaces";
import { Card } from "../interfaces/card.interfaces";

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
  'Bulbasaur': require('@/assets/cards/en/Genetic Apex/cPK_10_000010_00_FUSHIGIDANE_C.png'),
  'Ivysaur': require("@/assets/cards/en/Genetic Apex/cPK_10_000020_00_FUSHIGISOU_U.png"),
  'Venusaur': require("@/assets/cards/en/Genetic Apex/cPK_10_000030_00_FUSHIGIBANA_R.png"),
  'Venusaur EX' :require("@/assets/cards/en/Genetic Apex/cPK_10_000040_00_FUSHIGIBANAex_RR.png"),
  'Caterpie': require("@/assets/cards/en/Genetic Apex/cPK_10_000050_00_CATERPIE_C.png"),
  'Metapod': require("@/assets/cards/en/Genetic Apex/cPK_10_000060_00_TRANSEL_C.png"),
  'Butterfree': require("@/assets/cards/en/Genetic Apex/cPK_10_000070_00_BUTTERFREE_R.png"),
  'Weedle': require("@/assets/cards/en/Genetic Apex/cPK_10_000080_00_BEEDLE_C.png"),
  'Kakuna': require("@/assets/cards/en/Genetic Apex/cPK_10_000090_00_COCOON_C.png"),
  'Beedrill': require("@/assets/cards/en/Genetic Apex/cPK_10_000100_00_SPEAR_R.png"),
  'Oddish': require("@/assets/cards/en/Genetic Apex/cPK_10_000110_00_NAZONOKUSA_C.png"),
  'Gloom': require("@/assets/cards/en/Genetic Apex/cPK_10_000120_00_KUSAIHANA_U.png"),
  'Vileplume': require("@/assets/cards/en/Genetic Apex/cPK_10_000130_00_RUFFRESIA_R.png"),
  'Paras': require("@/assets/cards/en/Genetic Apex/cPK_10_000140_00_PARAS_C.png"),
  'Parasect': require("@/assets/cards/en/Genetic Apex/cPK_10_000150_00_PARASECT_U.png"),
  'Venonat': require("@/assets/cards/en/Genetic Apex/cPK_10_000160_00_KONGPANG_C.png"),
  'Venomoth': require("@/assets/cards/en/Genetic Apex/cPK_10_000170_00_MORPHON_U.png"),
  'Bellsprout': require("@/assets/cards/en/Genetic Apex/cPK_10_000180_00_MADATSUBOMI_C.png"),
  'Weepinbell': require("@/assets/cards/en/Genetic Apex/cPK_10_000190_00_UTSUDON_U.png"),
  'Victreebel': require("@/assets/cards/en/Genetic Apex/cPK_10_000200_00_UTSUBOT_R.png"),
  'Exeggcute': require("@/assets/cards/en/Genetic Apex/cPK_10_000210_00_TAMATAMA_C.png"),
  'Exeggutor': require("@/assets/cards/en/Genetic Apex/cPK_10_000220_00_NASSY_R.png"),
  'Exeggutor EX': require("@/assets/cards/en/Genetic Apex/cPK_10_000230_00_NASSYex_RR.png"),
  'Tangela': require("@/assets/cards/en/Genetic Apex/cPK_10_000240_00_MONJARA_C.png"),
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
  order_by_type: 'stage',
  order_by_rarity: 'rarity',
  order_by_pokedex: 'pokedex',
  order_by_retreat: 'retreat',
  order_by_hp: 'health'
};