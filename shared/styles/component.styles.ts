import { Platform, StyleSheet } from 'react-native';

import { 
  DEFAULT_MODAL_HEIGHT,
  ICON_WIDTH,
  MENU_HEIGHT,
  MENU_WIDTH,
  MIN_MODAL_HEIGHT,
  SORT_MODAL_HEIGHT
} from '../definitions/utils/constants';

import { Colors } from '../definitions/utils/colors';

export const HEADER_HEIGHT = 100;
export const HEADER_MIN_HEIGHT = 40;
export const CARD_IMAGE_WIDTH_3 = 116.5;
export const CARD_IMAGE_WIDTH_5 = 69.2;
export const CARD_IMAGE_WIDTH_7 = 48.6;

export const CARD_IMAGE_HEIGHT_3 = 164.52;
export const CARD_IMAGE_HEIGHT_5 = 98.52;
export const CARD_IMAGE_HEIGHT_7 = 69.78;
export const CREATE_GRID_HEIGHT = 520;

export const CREATE_GRID_MAX_HEIGHT = CREATE_GRID_HEIGHT + 60;
export const MAX_WEB_HEIGHT = 844;

export const gridWidthMap: Record<0 | 1 | 2, number> = {
  0: CARD_IMAGE_WIDTH_3,
  1: CARD_IMAGE_WIDTH_5,
  2: CARD_IMAGE_WIDTH_7
}

export const gridHeightMap: Record<number, number> = {
  0: CARD_IMAGE_HEIGHT_3,
  1: CARD_IMAGE_HEIGHT_5,
  2: CARD_IMAGE_HEIGHT_7,
  6: 82.34
}

export const gridColumMap: Record<0 | 1 | 2, number> = {
  0: 3,
  1: 5,
  2: 7
}

export const ThemeTextStyles = StyleSheet.create({
  default: {
    fontSize: 14,
    color: Colors.light.text
  },
  defaultSemiBold: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.light.bold
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.light.bold,
    marginBottom: 12
  },
  link: {
    fontSize: 14,
    color: '#0a7ea4',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.light.bold
  },
});

export const ParallaxStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT,
    overflow: 'hidden',
    zIndex: 1,
    paddingInline: 32,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 26,
    marginBottom: 20,
    backgroundColor: "#fff",
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
  },
  content: {
    flex: 1,
    paddingInline: 16,
    paddingBottom: 8,
    gap: 16,
  },
});

export const CollapsideStyles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  content: {
    marginTop: 6,
    marginLeft: 24,
  },
});

export const CardGridStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingBottom: 20, 
    justifyContent: 'space-between',
    backgroundColor: Colors.light.background,
    position: 'relative',
    zIndex: 100
  },
  searchInput: {
    width: '60%',
    height: 36,
    borderWidth: 1,
    padding: Platform.OS === 'web' ? 10 : 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    color: 'Colors.light.text',
    borderColor: 'skyblue',
  },
  gridContainer: {
    flexWrap: 'nowrap',
  },
  imageContainer: {
    marginHorizontal: 2,
    marginVertical: 2,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: Colors.light.skeleton,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: CARD_IMAGE_WIDTH_3,
    zIndex: 0,
    aspectRatio: 367/512
  },
  imageTitle: {
    padding: 8,
    fontSize: 13,
    textAlign: 'center',
  },
  switch: {
    position: 'relative',
    zIndex: 100, 
    right: 4,
    height: 20,
    width: 40,
    left: Platform.OS === 'web' ? -8 : -3,
  },
  clearInput: {
    position: 'absolute',
    left: 222,
    top: 8
  },
  totalCards: {
    marginLeft: 8,
    fontSize: 13,
    minWidth: 24,
    left: -2,
    position: 'relative',
    top: -1,
    marginRight: Platform.OS === 'web' ? 0 : 4,
    fontWeight: 600,
    textAlign: 'right'
  },
  triangle: {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 0,
    borderRightWidth: 15,
    borderBottomWidth: 15,
    borderRightColor: 'transparent',
    borderBottomColor: 'darkorange',
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 10
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 4
  }
});

export const IconStyles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    right: 32,
    top: 26,
    bottom: 0,
    padding: 2,
    borderRadius: 50,
    borderColor: 'skyblue',
    borderWidth: 2,
    borderStyle: 'solid',
    width: 24,
    height: 24,
  },
  icon: {
    color: Colors.light.icon,
    fontSize: 16,
    marginTop: -1
  }
});

export const ModalStyles = StyleSheet.create({
  centeredView: {
    flex: Platform.OS === 'web' ? -1 : 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 100
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
    elevation: 5,
    width: '90%',
    maxHeight: '78%',
    minHeight: DEFAULT_MODAL_HEIGHT,
    overflow: 'hidden',
    top: -10,
  },
  modalHeader: {
    backgroundColor: Colors.light.background,
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
    zIndex: 1,
    textAlign: 'center'
  },
  modalHeaderTitle: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.light.bold
  },
  modalScrollView: {
    maxHeight: '78%',
    padding: Platform.OS === 'web' ? 24 : 20,
    backgroundColor: 'white',
    minHeight: MIN_MODAL_HEIGHT,
  },
  modalFooter: {
    backgroundColor: Colors.light.background,
    paddingTop: 20,
    paddingInline: 14,
    paddingBottom: 22,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    boxShadow: '0px -4px 12px rgba(0, 0, 0, 0.2)',
  },
  closeButton: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
  },
});

export const NotFoundStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});

export const DetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 315,
    height: 443.6,
    aspectRatio: 0.71,
    zIndex: 10
    
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 22,
    left: 0,
    right: 0,
    alignItems: 'center',
    flex: 1,
    zIndex: 1000
  },
});

export const ButtonStyles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 3, // Inset
    elevation: 2,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
  },
  insetBorder: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "skyblue",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: 600,
  },
});

export const MenuStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: MENU_WIDTH,
    height: MENU_HEIGHT,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
    position: 'absolute',
    right: 0,
    bottom: 80,
    overflow: 'hidden',
    paddingInline: 24,
    paddingBlock: 32,
    userSelect: 'none'
  },
  expansions: {
    backgroundColor: 'white',
    width: '100%',
    height: 656,
    position: 'absolute',
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    userSelect: 'none'
  }
});

export const TabButtonStyles = StyleSheet.create({
  icon: {
    marginTop: Platform.OS === 'web' ? 10 : 5,
    top: 2,
    position: 'relative',
    fontSize: 24,
    left: 2
  },
  stacks: {
    marginTop: 7,
    fontSize: 24,
    top: Platform.OS === 'web' ? 3 : 2,
    position: 'relative'
  },
  stylus: {
    marginTop: 7,
    fontSize: 15,
    top: Platform.OS === 'web' ? 3 : 2,
    position: 'relative'
  },
  trade: {
    top: Platform.OS === 'web' ? 6 : 4,
    position: 'relative'
  },
  menu: {
    marginTop: 5,
    top: 2,
    position: 'relative',
    fontSize: 24,
  },
});

export const CustomTabButtonStyles = StyleSheet.create({
  icon: {
    fontSize: 24,
    justifyContent: 'center', 
    marginTop: Platform.OS === 'web' ? 9 : 8,
    marginLeft: Platform.OS === 'web' ? 3 : 28,
    display: 'flex'
  },
});

export const LayoutStyles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
    position: 'absolute'
  },
});

export const WebStyles = StyleSheet.create({
  view: {
    width: 390, 
    height: MAX_WEB_HEIGHT,
    minWidth: 390,
    minHeight: MAX_WEB_HEIGHT,
    maxWidth: 390,
    maxHeight: MAX_WEB_HEIGHT,
    alignSelf: 'center',
    justifyContent: 'center',
    boxShadow: '0px 0px 25px 10px rgba(0, 0, 0, .8)',
  }
});

export const TabsMenuStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    zIndex: 1,
    borderRadius: 50,
    opacity: 0.3,
    backgroundColor: 'mediumaquamarine'
  },
  user: {
    justifyContent: 'flex-start', 
    flexDirection: 'row', 
    alignItems: 'center', 
    borderRadius: 50,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
    backgroundColor: Colors.light.background,
    width: 202,
    userSelect: 'none',
    gap: 2
  },
  avatar: {
    width: 50, 
    height: 50, 
    zIndex: 4, 
    backgroundColor: 'mediumaquamarine', 
    borderRadius: 22
  },
  listItem: {
    paddingBlock: 10,
    display: 'flex',
    flexDirection: 'row'
  },
  listIcon: {
    fontSize: 25,
    width: 24,
    color: 'mediumaquamarine',
    position: 'relative',
    top: -2
  },
  listLabel: {
    userSelect: 'none',
    marginLeft: 16
  },
  separator: {
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
    height: 1
  },
  itemSmall: {
    paddingBlock: 10,
    display: 'flex',
    flexDirection: 'row'
  },
  labelSmall: {
    userSelect: 'none',
    fontSize: 14,
    marginLeft: 16
  }
});

export const ScreenStyles = StyleSheet.create({
  content: {
    flex: 1, 
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingInline: 28,
    paddingBottom: 8,
    gap: 8,
    marginTop: 6
  },
  bottomContent: {
    position: 'absolute',
    bottom: 22,
    alignSelf: 'center'
  }
});

export const HelpItemStyles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    paddingBlock: 6,
    paddingInline: 12,
    borderRadius: 50,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    userSelect: 'none',
    marginBottom: 14,
    width: '100%',
    alignItems: 'center'
  },
  icon: {
    color: 'skyblue',
    marginInlineEnd: 12,
    fontSize: 24
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    position: 'relative',
    top: -40
  }
});

export const LoadingStyles = StyleSheet.create({
  size: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
    backgroundColor: 'transparent'
  },
  box: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',
    elevation: 10,
    position: 'absolute'
  },
});

export const filterStyles = StyleSheet.create({
  container: {
    position: 'absolute', 
    width: '100%',
    bottom: 0,
    zIndex: 100,
    backgroundColor: 'white',
    borderTopLeftRadius: 40, 
    borderTopRightRadius: 40,
    overflow: 'hidden'
  },
  header: {
    fontSize: 20, 
    fontWeight: 600, 
    marginBottom: 20, 
    color: '#333'
  },
  list: {
    paddingTop: 20,
  },
  button: {
    boxShadow: '8px 12px 12px rgba(0, 0, 0, 0.2)',
    borderRadius: 20,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingVertical: 4,
    color: '#555',
    zIndex: 100
  },
  image: {
    width: 19,
    height: 20,
  },
  imageContainer: {
    height: 32,
    width: ICON_WIDTH,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 0,
    paddingVertical: 0,
    flexDirection: 'row'
  },
  flexContainer: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 36, 
    columnGap: 12,
    rowGap: 16
  },
  showAll: {
    position: 'absolute', 
    right: 0, 
    top: -45
  },
  gridButton: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '48%', 
    left: 0,
    zIndex: 100
  },
  buttonText: {
    color: '#555',
    position: 'relative',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  separator: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
    top: 12,
    left: Platform.OS === 'web' ? -8 : 0,
    color: Colors.light.text,
    transform: [{scaleX: 2}]
  },
  buttonContainer: {
    justifyContent: 'space-between', 
    flexWrap: 'wrap', 
    marginBottom: 24,
    paddingRight: 16
  },
  expansionContainer: {
    padding: 10, 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
  },
  expansionShadow: {
    width: '100%', 
    height: 6, 
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)', 
    position: 'relative', 
    top: -6
  },
  packImage: {
    width: 58, 
    height: 114
  },
  reset: {
    width: 34, 
    borderWidth: 0, 
    position: 'absolute', 
    right: 0, 
    marginLeft: Platform.OS === 'web' ? 'auto' : '86%', 
    boxShadow: '-4px 4px 8px rgba(0, 0, 0, 0.4)', 
    top: -16
  }
});

export const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroImage: {
    width: '115%',
    height: 225,
    marginBottom: 36,
    position: 'relative',
    marginTop: -20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    paddingInline: 12
  },
  infoSection: {
    marginBottom: 0,
    paddingHorizontal: 20,
  },
  infoText: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 15,
    lineHeight: 16,
  },
  ctaButton: {
    backgroundColor: 'skyblue',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBlock: 60,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
  },
  ctaText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export const sharedModalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  infoSection: {
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 24
  },
});

export const expansionStyles = StyleSheet.create({
  buttonBase: {
    marginBottom: 48,
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedBackground: {
    backgroundColor: '#444444',
  },
  buttonTextSelected: {
    color: 'white',
  },
  icon: {
    position: 'absolute',
    justifyContent: 'flex-end',
    fontSize: 24,
    top: 4,
    color: '#555',
    right: 7,
  },
});

export const sortStyles = StyleSheet.create({
  container: {
    height: SORT_MODAL_HEIGHT, 
    position: 'absolute', 
    width: '100%',
    bottom: 0,
    zIndex: 100,
    backgroundColor: 'white',
    borderTopLeftRadius: 40, borderTopRightRadius: 40
  },
  itemContainer: {
    paddingBlock: 4,
  },
  label: {
    fontSize: 15,
    color: '#555',
    flex: 1,
    marginLeft: 12,
    fontWeight: '400',
    width: '100%',
    textAlign: 'right',
  },
  item: {
    borderRadius: 18,
    flexDirection: 'row',
    paddingBlock: 8,
    paddingInline: 12
  },
  activeItem: {
    color: 'white',
    backgroundColor: '#515151',
    fontWeight: 'bold'
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginLeft: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
  },
  diamond: {
    position: 'relative',
    top: 1
  }
});

export const cardDetailStyles = StyleSheet.create({
  card: {
    boxShadow: '8px 12px 12px 2px rgba(0, 0, 0, 0.2)',
    borderRadius: 20
  },
  favoriteContainer: {
    position: 'absolute',
    right: 29,
    top: 22,
    bottom: 0,
    padding: 2
  },
  favoriteIcon: {
    fontSize: 32,
    width: 30,
    height: 30,
    color: Colors.light.icon,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: {height: 2, width: 2},
    textShadowRadius: 4 
  },
  scrollContainer: {
    width: '100%',  
    backgroundColor: 'white', 
    position: 'absolute', 
    bottom: 0, 
    touchAction: 'none', 
    borderTopLeftRadius: 60, 
    borderTopRightRadius: 60,
  },
  panContainer: {
    borderTopLeftRadius: 60, 
    borderTopRightRadius: 60,
    height: 50,
    backgroundColor: Colors.light.background,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
    zIndex: 150
  },
  panIndicator: {
    width: 60,
    height: 6,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
    backgroundColor: Colors.light.skeleton,
    marginInline: 'auto'
  },
  itemInfo: {
    padding: 16,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
    backgroundColor: Colors.light.background,
    borderRadius: 20,
    width: '100%',
    marginBottom: 30,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
  },
  expansionContainer: {
    position: 'relative',
    width: '40%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  expansionTag: {
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 16
  }
});

export const CreateScreenStyles = StyleSheet.create({
  addContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    overflow: 'hidden',
    zIndex: 10
  },
  addIcon: {
    width: 20, 
    height: 20, 
    color: 'mediumaquamarine', 
    fontSize: 25,
    top: -2,
  },
  textContainer: {
    
  },
  decksContainer: {
    padding: 16,
    zIndex: 0,
    overflow: 'hidden',
    height: '100%'
  },
  deckItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)',
    paddingVertical: 6,
    paddingHorizontal: 6,
    marginBottom: 10,
    overflow: 'hidden'
  },
  popularCards: {
    flexDirection: 'row', 
    minHeight: 30, 
    minWidth: 114, 
    position: 'relative'
  },
  deckName: { 
    alignItems: 'center', 
    justifyContent: 'flex-start', 
    flexDirection: 'row',
    position: 'relative'
  },
  energies: {
    flexDirection: 'row',
    gap: 6, 
    justifyContent: 'center', 
    backgroundColor: Colors.light.background, 
    padding: 4, 
    borderRadius: 40,
  },
  popularImage: {
    width: 55, 
    borderRadius: 4, 
    position: 'absolute', 
    backgroundColor: 'rgb(225, 225, 225)',
    shadowColor: 'black',
    shadowRadius: 4,
    shadowOffset: {height: 1, width: 2},
    shadowOpacity: 0.1,
    top: 4,
  }
});

export const offersStyles = StyleSheet.create({
  input: {
    boxShadow: '5px 4px 12px rgba(0, 0, 0, 0.2)', 
    width: '100%', 
    marginTop: 16, 
    marginBottom: 6
  },
  included: {
    width: Platform.OS === 'web' ? 57.6 : 58, 
    position: 'absolute', 
    zIndex: 10, 
    opacity: 0.7, 
    backgroundColor: 'rgba(0, 0, 0, 0.8)', 
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  statsBtn: {
    marginBottom: 10, 
    marginTop: 40, 
    backgroundColor: 'mediumaquamarine', 
    flexDirection: 'row', 
    justifyContent: 'center', 
    gap: 10, 
    alignItems: 'center'
  }
});