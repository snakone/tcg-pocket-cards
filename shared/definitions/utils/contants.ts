import { PressableAndroidRippleConfig } from "react-native";
import { ItemWithRoute } from "../interfaces/layout.interfaces";

export const MENU_WIDTH = 250;
export const PAGE_TITLE = "TCG Pocket Cards";
export const LOCAL_HOST = 'http://192.168.1.71:3000';
export const DEFAULT_LANG = 'es';

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
  'Weedle': require("@/assets/cards/en/Genetic Apex/cPK_10_000080_00_BEEDLE_C.png")
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