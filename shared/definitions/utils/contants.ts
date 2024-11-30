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
  '94': require("@/assets/cards/en/Genetic Apex/cPK_10_000940_00_PIKACHU_C.png"),
  '95': require("@/assets/cards/en/Genetic Apex/cPK_10_000950_00_RAICHU_R.png"),
  '96': require("@/assets/cards/en/Genetic Apex/cPK_10_000960_00_PIKACHUex_RR.png"),
  '97': require("@/assets/cards/en/Genetic Apex/cPK_10_000970_00_COIL_C.png"),
  '98': require("@/assets/cards/en/Genetic Apex/cPK_10_000980_00_RARECOIL_R.png"),
  '99': require("@/assets/cards/en/Genetic Apex/cPK_10_000990_00_BIRIRIDAMA_C.png"),
  '100': require("@/assets/cards/en/Genetic Apex/cPK_10_001000_00_MARUMINE_U.png"),
  '101': require("@/assets/cards/en/Genetic Apex/cPK_10_001010_00_ELEBOO_C.png"),
  '102': require("@/assets/cards/en/Genetic Apex/cPK_10_001020_00_THUNDERS_R.png"),
  '103': require("@/assets/cards/en/Genetic Apex/cPK_10_001030_00_THUNDER_R.png"),
  '104': require("@/assets/cards/en/Genetic Apex/cPK_10_001040_00_THUNDERex_RR.png"),
  '105': require("@/assets/cards/en/Genetic Apex/cPK_10_001050_00_SHIMAMA_C.png"),
  '106': require("@/assets/cards/en/Genetic Apex/cPK_10_001060_00_ZEBRAIKA_U.png"),
  '107': require("@/assets/cards/en/Genetic Apex/cPK_10_001070_00_SHIBISHIRASU_C.png"),
  '108': require("@/assets/cards/en/Genetic Apex/cPK_10_001080_00_SHIBIBEEL_U.png"),
  '109': require("@/assets/cards/en/Genetic Apex/cPK_10_001090_00_SHIBIRUDON_R.png"),
  '110': require("@/assets/cards/en/Genetic Apex/cPK_10_001100_00_ERIKITERU_C.png"),
  '111': require("@/assets/cards/en/Genetic Apex/cPK_10_001110_00_ELEZARD_C.png"),
  '112': require("@/assets/cards/en/Genetic Apex/cPK_10_001120_00_BACHINUNI_U.png"),
  '113': require("@/assets/cards/en/Genetic Apex/cPK_10_001130_00_PIPPI_C.png"),
  '114': require("@/assets/cards/en/Genetic Apex/cPK_10_001140_00_PIXY_U.png"),
  '115': require("@/assets/cards/en/Genetic Apex/cPK_10_001150_00_CASEY_C.png"),
  '116': require("@/assets/cards/en/Genetic Apex/cPK_10_001160_00_YUNGERER_U.png"),
  '117': require("@/assets/cards/en/Genetic Apex/cPK_10_001170_00_FOODIN_R.png"),
  '118': require("@/assets/cards/en/Genetic Apex/cPK_10_001180_00_YADON_C.png"),
  '119': require("@/assets/cards/en/Genetic Apex/cPK_10_001190_00_YADORAN_U.png"),
  '120': require("@/assets/cards/en/Genetic Apex/cPK_10_001200_00_GHOS_C.png"),
  '121': require("@/assets/cards/en/Genetic Apex/cPK_10_001210_00_GHOST_U.png"),
  '122': require("@/assets/cards/en/Genetic Apex/cPK_10_001220_00_GANGAR_R.png"),
  '123': require("@/assets/cards/en/Genetic Apex/cPK_10_001230_00_GANGARex_RR.png"),
  '124': require("@/assets/cards/en/Genetic Apex/cPK_10_001240_00_SLEEPE_C.png"),
  '125': require("@/assets/cards/en/Genetic Apex/cPK_10_001250_00_SLEEPER_R.png"),
  '126': require("@/assets/cards/en/Genetic Apex/cPK_10_001260_00_BARRIERD_U.png"),
  '127': require("@/assets/cards/en/Genetic Apex/cPK_10_001270_00_ROUGELA_C.png"),
  '128': require("@/assets/cards/en/Genetic Apex/cPK_10_001280_00_MEWTWO_R.png"),
  '129': require("@/assets/cards/en/Genetic Apex/cPK_10_001290_00_MEWTWOex_RR.png"),
  '130': require("@/assets/cards/en/Genetic Apex/cPK_10_001300_00_RALTS_C.png"),
  '131': require("@/assets/cards/en/Genetic Apex/cPK_10_001310_00_KIRLIA_U.png"),
  '132': require("@/assets/cards/en/Genetic Apex/cPK_10_001320_00_SIRNIGHT_R.png"),
  '133': require("@/assets/cards/en/Genetic Apex/cPK_10_001330_00_KOROMORI_C.png"),
  '134': require("@/assets/cards/en/Genetic Apex/cPK_10_001340_00_KOKOROMORI_C.png"),
  '135': require("@/assets/cards/en/Genetic Apex/cPK_10_001350_00_GOBIT_C.png"),
  '136': require("@/assets/cards/en/Genetic Apex/cPK_10_001360_00_GOLOOG_U.png"),
  '137': require("@/assets/cards/en/Genetic Apex/cPK_10_001370_00_SAND_C.png"),
  '138': require("@/assets/cards/en/Genetic Apex/cPK_10_001380_00_SANDPAN_U.png"),
  '139': require("@/assets/cards/en/Genetic Apex/cPK_10_001390_00_DIGDA_C.png"),
  '140': require("@/assets/cards/en/Genetic Apex/cPK_10_001400_00_DIGTRE_C.png"),
  '141': require("@/assets/cards/en/Genetic Apex/cPK_10_001410_00_MANKEY_C.png"),
  '142': require("@/assets/cards/en/Genetic Apex/cPK_10_001420_00_OKORIZARU_U.png"),
  '143': require("@/assets/cards/en/Genetic Apex/cPK_10_001430_00_WANRIKY_C.png"),
  '144': require("@/assets/cards/en/Genetic Apex/cPK_10_001440_00_GORIKY_U.png"),
  '145': require("@/assets/cards/en/Genetic Apex/cPK_10_001450_00_KAIRIKY_R.png"),
  '146': require("@/assets/cards/en/Genetic Apex/cPK_10_001460_00_KAIRIKYex_RR.png"),
  '147': require("@/assets/cards/en/Genetic Apex/cPK_10_001470_00_ISITSUBUTE_C.png"),
  '148': require("@/assets/cards/en/Genetic Apex/cPK_10_001480_00_GOLONE_U.png"),
  '149': require("@/assets/cards/en/Genetic Apex/cPK_10_001490_00_GOLONYA_R.png"),
  '150': require("@/assets/cards/en/Genetic Apex/cPK_10_001500_00_IWARK_U.png"),
  '151': require("@/assets/cards/en/Genetic Apex/cPK_10_001510_00_KARAKARA_C.png"),
  '152': require("@/assets/cards/en/Genetic Apex/cPK_10_001520_00_GARAGARA_U.png"),
  '153': require("@/assets/cards/en/Genetic Apex/cPK_10_001530_00_GARAGARAex_RR.png"),
  '154': require("@/assets/cards/en/Genetic Apex/cPK_10_001540_00_SAWAMULAR_C.png"),
  '155': require("@/assets/cards/en/Genetic Apex/cPK_10_001550_00_EBIWALAR_C.png"),
  '156': require("@/assets/cards/en/Genetic Apex/cPK_10_001560_00_SIHORN_C.png"),
  '157': require("@/assets/cards/en/Genetic Apex/cPK_10_001570_00_SIDON_U.png"),
  '158': require("@/assets/cards/en/Genetic Apex/cPK_10_001580_00_KABUTO_U.png"),
  '159': require("@/assets/cards/en/Genetic Apex/cPK_10_001590_00_KABUTOPS_R.png"),
  '160': require("@/assets/cards/en/Genetic Apex/cPK_10_001600_00_KOJOFU_C.png"),
  '161': require("@/assets/cards/en/Genetic Apex/cPK_10_001610_00_KOJONDO_U.png"),
  '162': require("@/assets/cards/en/Genetic Apex/cPK_10_001620_00_TATAKKO_C.png"),
  '163': require("@/assets/cards/en/Genetic Apex/cPK_10_001630_00_OTOSUPUS_U.png"),
  '164': require("@/assets/cards/en/Genetic Apex/cPK_10_001640_00_ARBO_C.png"),
  '165': require("@/assets/cards/en/Genetic Apex/cPK_10_001650_00_ARBOK_U.png"),
  '166': require("@/assets/cards/en/Genetic Apex/cPK_10_001660_00_NIDORAN_C.png"),
  '167': require("@/assets/cards/en/Genetic Apex/cPK_10_001670_00_NIDORINA_U.png"),
  '168': require("@/assets/cards/en/Genetic Apex/cPK_10_001680_00_NIDOQUEEN_R.png"),
  '169': require("@/assets/cards/en/Genetic Apex/cPK_10_001690_00_NIDORAN_C.png"),
  '170': require("@/assets/cards/en/Genetic Apex/cPK_10_001700_00_NIDORINO_U.png"),
  '171': require("@/assets/cards/en/Genetic Apex/cPK_10_001710_00_NIDOKING_R.png"),
  '172': require("@/assets/cards/en/Genetic Apex/cPK_10_001720_00_ZUBAT_C.png"),
  '173': require("@/assets/cards/en/Genetic Apex/cPK_10_001730_00_GOLBAT_U.png"),
  '174': require("@/assets/cards/en/Genetic Apex/cPK_10_001740_00_BETBETER_C.png"),
  '175': require("@/assets/cards/en/Genetic Apex/cPK_10_001750_00_BETBETON_R.png"),
  '176': require("@/assets/cards/en/Genetic Apex/cPK_10_001760_00_DOGARS_C.png"),
  '177': require("@/assets/cards/en/Genetic Apex/cPK_10_001770_00_MATADOGAS_R.png"),
  '178': require("@/assets/cards/en/Genetic Apex/cPK_10_001780_00_KUCHEAT_C.png"),
  '179': require("@/assets/cards/en/Genetic Apex/cPK_10_001790_00_KOMATANA_C.png"),
  '180': require("@/assets/cards/en/Genetic Apex/cPK_10_001800_00_KIRIKIZAN_U.png"),
  '181': require("@/assets/cards/en/Genetic Apex/cPK_10_001810_00_MELTAN_C.png"),
  '182': require("@/assets/cards/en/Genetic Apex/cPK_10_001820_00_MELMETAL_R.png"),
  '183': require("@/assets/cards/en/Genetic Apex/cPK_10_001830_00_MINIRYU_C.png"),
  '184': require("@/assets/cards/en/Genetic Apex/cPK_10_001840_00_HAKURYU_U.png"),
  '185': require("@/assets/cards/en/Genetic Apex/cPK_10_001850_00_KAIRYU_R.png"),
  '186': require("@/assets/cards/en/Genetic Apex/cPK_10_001860_00_POPPO_C.png"),
  '187': require("@/assets/cards/en/Genetic Apex/cPK_10_001870_00_PIGEON_C.png"),
  '188': require("@/assets/cards/en/Genetic Apex/cPK_10_001880_00_PIGEOT_R.png"),
  '189': require("@/assets/cards/en/Genetic Apex/cPK_10_001890_00_KORATTA_C.png"),
  '190': require("@/assets/cards/en/Genetic Apex/cPK_10_001900_00_RATTA_C.png"),
  '191': require("@/assets/cards/en/Genetic Apex/cPK_10_001910_00_ONISUZUME_C.png"),
  '192': require("@/assets/cards/en/Genetic Apex/cPK_10_001920_00_ONIDRILL_C.png"),
  '193': require("@/assets/cards/en/Genetic Apex/cPK_10_001930_00_PURIN_C.png"),
  '194': require("@/assets/cards/en/Genetic Apex/cPK_10_001940_00_PUKURIN_C.png"),
  '195': require("@/assets/cards/en/Genetic Apex/cPK_10_001950_00_PUKURINex_RR.png"),
  '196': require("@/assets/cards/en/Genetic Apex/cPK_10_001960_00_NYARTH_C.png"),
  '197': require("@/assets/cards/en/Genetic Apex/cPK_10_001970_00_PERSIAN_U.png"),
  '198': require("@/assets/cards/en/Genetic Apex/cPK_10_001980_00_KAMONEGI_C.png"),
  '199': require("@/assets/cards/en/Genetic Apex/cPK_10_001990_00_DODO_C.png"),
  '200': require("@/assets/cards/en/Genetic Apex/cPK_10_002000_00_DODORIO_U.png"),
  '201': require("@/assets/cards/en/Genetic Apex/cPK_10_002010_00_BERORINGA_U.png"),
  '202': require("@/assets/cards/en/Genetic Apex/cPK_10_002020_00_LUCKY_U.png"),
  '203': require("@/assets/cards/en/Genetic Apex/cPK_10_002030_00_GARURA_R.png"),
  '204': require("@/assets/cards/en/Genetic Apex/cPK_10_002040_00_KENTAUROS_U.png"),
  '205': require("@/assets/cards/en/Genetic Apex/cPK_10_002050_00_METAMON_R.png"),
  '206': require("@/assets/cards/en/Genetic Apex/cPK_10_002060_00_EIEVUI_C.png"),
  '207': require("@/assets/cards/en/Genetic Apex/cPK_10_002060_01_EIEVUI_C.png"),
  '208': require("@/assets/cards/en/Genetic Apex/cPK_10_002060_02_EIEVUI_C.png"),
  '209': require("@/assets/cards/en/Genetic Apex/cPK_10_002070_00_PORYGON_U.png"),
  '210': require("@/assets/cards/en/Genetic Apex/cPK_10_002080_00_PTERA_R.png"),
  '211': require("@/assets/cards/en/Genetic Apex/cPK_10_002090_00_KABIGON_R.png"),
  '212': require("@/assets/cards/en/Genetic Apex/cPK_10_002100_00_CHILLARMY_C.png"),
  '213': require("@/assets/cards/en/Genetic Apex/cPK_10_002110_00_CHILLACCINO_U.png"),
  '214': require("@/assets/cards/en/Genetic Apex/cPK_10_002120_00_WOOLUU_C.png"),
  '215': require("@/assets/cards/en/Genetic Apex/cPK_10_002130_00_BAIWOOLUU_C.png"),
  '216': require("@/assets/cards/en/Genetic Apex/cPK_20_000010_00_FUSHIGIDANE_AR.png"),
  '217': require("@/assets/cards/en/Genetic Apex/cPK_20_000040_00_FUSHIGIBANAex_SR.png"),
  '218': require("@/assets/cards/en/Genetic Apex/cPK_20_000120_00_KUSAIHANA_AR.png"),
  '219': require("@/assets/cards/en/Genetic Apex/cPK_20_000230_00_NASSYex_SR.png"),
  '220': require("@/assets/cards/en/Genetic Apex/cPK_20_000260_00_KAILIOS_AR.png"),
  '221': require("@/assets/cards/en/Genetic Apex/cPK_20_000330_00_HITOKAGE_AR.png"),
  '222': require("@/assets/cards/en/Genetic Apex/cPK_20_000360_00_LIZARDONex_SR.png"),
  '223': require("@/assets/cards/en/Genetic Apex/cPK_20_000360_01_LIZARDONex_IM.png"),
  '224': require("@/assets/cards/en/Genetic Apex/cPK_20_000360_02_LIZARDONex_UR.png"),
  '225': require("@/assets/cards/en/Genetic Apex/cPK_20_000410_00_WINDIEex_SR.png"),
  '226': require("@/assets/cards/en/Genetic Apex/cPK_20_000430_00_GALLOP_AR.png"),
  '227': require("@/assets/cards/en/Genetic Apex/cPK_20_000470_00_FIREex_SR.png"),
  '228': require("@/assets/cards/en/Genetic Apex/cPK_20_000470_01_FIREex_SAR.png"),
  '229': require("@/assets/cards/en/Genetic Apex/cPK_20_000530_00_ZENIGAME_AR.png"),
  '230': require("@/assets/cards/en/Genetic Apex/cPK_20_000560_00_KAMEXex_SR.png"),
  '231': require("@/assets/cards/en/Genetic Apex/cPK_20_000760_00_STARMIEex_SR.png"),
  '232': require("@/assets/cards/en/Genetic Apex/cPK_20_000780_00_GYARADOS_AR.png"),
  '233': require("@/assets/cards/en/Genetic Apex/cPK_20_000790_00_LAPLACE_AR.png"),
  '234': require("@/assets/cards/en/Genetic Apex/cPK_20_000840_00_FREEZERex_SR.png"),
  '235': require("@/assets/cards/en/Genetic Apex/cPK_20_000840_01_FREEZERex_SAR.png"),
  '236': require("@/assets/cards/en/Genetic Apex/cPK_20_000960_00_PIKACHUex_SR.png"),
  '237': require("@/assets/cards/en/Genetic Apex/cPK_20_000960_01_PIKACHUex_IM.png"),
  '238': require("@/assets/cards/en/Genetic Apex/cPK_20_000960_02_PIKACHUex_UR.png"),
  '239': require("@/assets/cards/en/Genetic Apex/cPK_20_001000_00_MARUMINE_AR.png"),
  '240': require("@/assets/cards/en/Genetic Apex/cPK_20_001040_00_THUNDERex_SR.png"),
  '241': require("@/assets/cards/en/Genetic Apex/cPK_20_001040_01_THUNDERex_SAR.png"),
  '242': require("@/assets/cards/en/Genetic Apex/cPK_20_001170_00_FOODIN_AR.png"),
  '243': require("@/assets/cards/en/Genetic Apex/cPK_20_001180_00_YADON_AR.png"),
  '244': require("@/assets/cards/en/Genetic Apex/cPK_20_001230_00_GANGARex_SR.png"),
  '245': require("@/assets/cards/en/Genetic Apex/cPK_20_001230_01_GANGARex_SAR.png"),
  '246': require("@/assets/cards/en/Genetic Apex/cPK_20_001290_00_MEWTWOex_SR.png"),
  '247': require("@/assets/cards/en/Genetic Apex/cPK_20_001290_01_MEWTWOex_IM.png"),
  '248': require("@/assets/cards/en/Genetic Apex/cPK_20_001290_02_MEWTWOex_UR.png"),
  '249': require("@/assets/cards/en/Genetic Apex/cPK_20_001390_00_DIGDA_AR.png"),
  '250': require("@/assets/cards/en/Genetic Apex/cPK_20_001460_00_KAIRIKYex_SR.png"),
  '251': require("@/assets/cards/en/Genetic Apex/cPK_20_001460_01_KAIRIKYex_SAR.png"),
  '252': require("@/assets/cards/en/Genetic Apex/cPK_20_001510_00_KARAKARA_AR.png"),
  '253': require("@/assets/cards/en/Genetic Apex/cPK_20_001530_00_GARAGARAex_SR.png"),
  '254': require("@/assets/cards/en/Genetic Apex/cPK_20_001680_00_NIDOQUEEN_AR.png"),
  '255': require("@/assets/cards/en/Genetic Apex/cPK_20_001710_00_NIDOKING_AR.png"),
  '256': require("@/assets/cards/en/Genetic Apex/cPK_20_001730_00_GOLBAT_AR.png"),
  '257': require("@/assets/cards/en/Genetic Apex/cPK_20_001770_00_MATADOGAS_AR.png"),
  '258': require("@/assets/cards/en/Genetic Apex/cPK_20_001850_00_KAIRYU_AR.png"),
  '259': require("@/assets/cards/en/Genetic Apex/cPK_20_001880_00_PIGEOT_AR.png"),
  '260': require("@/assets/cards/en/Genetic Apex/cPK_20_001950_00_PUKURINex_SR.png"),
  '261': require("@/assets/cards/en/Genetic Apex/cPK_20_001950_01_PUKURINex_SAR.png"),
  '262': require("@/assets/cards/en/Genetic Apex/cPK_20_001960_00_NYARTH_AR.png"),
  '263': require("@/assets/cards/en/Genetic Apex/cPK_20_002050_00_METAMON_AR.png"),
  '264': require("@/assets/cards/en/Genetic Apex/cPK_20_002060_00_EIEVUI_AR.png"),
  '265': require("@/assets/cards/en/Genetic Apex/cPK_20_002070_00_PORYGON_AR.png"),
  '266': require("@/assets/cards/en/Genetic Apex/cPK_20_002090_00_KABIGON_AR.png"),
  '267': require("@/assets/cards/en/Genetic Apex/cPK_20_002140_00_MEW_IM.png"),
  '268': require("@/assets/cards/en/Genetic Apex/cPK_90_000010_00_FUSHIGIDANE_R.png"),
  '269': require("@/assets/cards/en/Genetic Apex/cPK_90_000030_00_FUSHIGIBANA_AR.png"),
  '270': require("@/assets/cards/en/Genetic Apex/cPK_90_000070_00_BUTTERFREE_R.png"),
  '271': require("@/assets/cards/en/Genetic Apex/cPK_90_000890_00_GEKKOUGA_R.png"),
  '272': require("@/assets/cards/en/Genetic Apex/cPK_90_000940_01_PIKACHU_C.png"),
  '273': require("@/assets/cards/en/Genetic Apex/cPK_90_000940_02_PIKACHU_AR.png"),
  '274': require("@/assets/cards/en/Genetic Apex/cPK_90_000970_00_COIL_R.png"),
  '275': require("@/assets/cards/en/Genetic Apex/cPK_90_001130_00_PIPPI_C.png"),
  '276': require("@/assets/cards/en/Genetic Apex/cPK_90_001280_00_MEWTWO_AR.png"),
  '277': require("@/assets/cards/en/Genetic Apex/cPK_90_001500_00_IWARK_C.png"),
  '278': require("@/assets/cards/en/Genetic Apex/cPK_90_001960_00_NYARTH_R.png"),
  '279': require("@/assets/cards/en/Genetic Apex/cPK_90_002020_00_LUCKY_R.png"),
  '280': require("@/assets/cards/en/Genetic Apex/cPK_90_002760_00_LAPLACEex_RR.png"),
  '281': require("@/assets/cards/en/Genetic Apex/cPK_90_002770_00_MANKEY_C.png"),
  '282': require("@/assets/cards/en/Genetic Apex/cPK_90_002780_00_GHOST_C.png"),
  '283': require("@/assets/cards/en/Genetic Apex/cPK_90_002790_00_PURIN_C.png"),
  '284': require("@/assets/cards/en/Genetic Apex/cTR_10_000080_00_KAINOKASEKI_C.png"),
  '285': require("@/assets/cards/en/Genetic Apex/cTR_10_000090_00_KOURANOKASEKI_C.png"),
  '286': require("@/assets/cards/en/Genetic Apex/cTR_10_000100_00_HIMITSUNOKOHAKU_C.png"),
  '287': require("@/assets/cards/en/Genetic Apex/cTR_10_000110_00_ERIKA_U.png"),
  '288': require("@/assets/cards/en/Genetic Apex/cTR_10_000120_00_KASUMI_U.png"),
  '289': require("@/assets/cards/en/Genetic Apex/cTR_10_000130_00_KATSURA_U.png"),
  '290': require("@/assets/cards/en/Genetic Apex/cTR_10_000140_00_KYOU_U.png"),
  '291': require("@/assets/cards/en/Genetic Apex/cTR_10_000150_00_SAKAKI_U.png"),
  '292': require("@/assets/cards/en/Genetic Apex/cTR_10_000160_00_TAKESHI_U.png"),
  '293': require("@/assets/cards/en/Genetic Apex/cTR_10_000170_00_NATSUME_U.png"),
  '294': require("@/assets/cards/en/Genetic Apex/cTR_10_000180_00_MATISSE_U.png"),
  '295': require("@/assets/cards/en/Genetic Apex/cTR_20_000110_00_ERIKA_SR.png"),
  '296': require("@/assets/cards/en/Genetic Apex/cTR_20_000120_00_KASUMI_SR.png"),
  '297': require("@/assets/cards/en/Genetic Apex/cTR_20_000130_00_KATSURA_SR.png"),
  '298': require("@/assets/cards/en/Genetic Apex/cTR_20_000140_00_KYOU_SR.png"),
  '299': require("@/assets/cards/en/Genetic Apex/cTR_20_000150_00_SAKAKI_SR.png"),
  '300': require("@/assets/cards/en/Genetic Apex/cTR_20_000160_00_TAKESHI_SR.png"),
  '301': require("@/assets/cards/en/Genetic Apex/cTR_20_000170_00_NATSUME_SR.png"),
  '302': require("@/assets/cards/en/Genetic Apex/cTR_20_000180_00_MATISSE_SR.png"),
  '303': require("@/assets/cards/en/Genetic Apex/cTR_90_000010_00_KIZUGUSURI_C.png"),
  '304': require("@/assets/cards/en/Genetic Apex/cTR_90_000020_00_SPEEDER_C.png"),
  '305': require("@/assets/cards/en/Genetic Apex/cTR_90_000030_00_MONSTERBALL_C.png"),
  '306': require("@/assets/cards/en/Genetic Apex/cTR_90_000040_00_HAKASENOKENKYU_C.png"),
  '307': require("@/assets/cards/en/Genetic Apex/cTR_90_000050_00_HANDSCOPE_C.png"),
  '308': require("@/assets/cards/en/Genetic Apex/cTR_90_000060_00_POKEMONZUKAN_C.png"),
  '309': require("@/assets/cards/en/Genetic Apex/cTR_90_000070_00_REDCARD_C.png"),
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