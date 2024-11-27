import { Platform, StyleSheet } from 'react-native';
import { iconWidth, MENU_WIDTH } from '../definitions/utils/contants';
import { Colors } from '../definitions/utils/colors';

export const HEADER_HEIGHT = 100;
export const HEADER_MIN_HEIGHT = 40;
export const CARD_IMAGE_WIDTH_3 = 106.6;
export const CARD_IMAGE_WIDTH_5 = 64.5;

export const ThemeTextStyles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    color: Colors.light.bold
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.light.bold,
    marginBottom: 12
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
  headerTitle: {
    fontSize: 22,
    lineHeight: 28,
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
    paddingInline: 28,
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
    backgroundColor: '#f0f0f0',
  },
  inputContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingBottom: Platform.OS === 'web' ? 14 : 10, 
    justifyContent: 'space-between',
    backgroundColor: '#F2F2F2',
    position: 'relative',
    zIndex: 100
  },
  searchInput: {
    width: '78%',
    height: 36,
    borderWidth: 1,
    padding: Platform.OS === 'web' ? 10 : 8,
    paddingInline: 16,
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
    backgroundColor: 'white',
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
    right: Platform.OS === 'web' ? 10 : 4, 
    transform: [
      { scale: Platform.OS === 'web' ? 1 : 1.1 }
    ]
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
    maxHeight: '80%',
    overflow: 'hidden',
  },
  modalHeader: {
    backgroundColor: '#F2F2F2',
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
    maxHeight: '85%',
    padding: 24,
    backgroundColor: 'white',
    zIndex: 0,
    flex: 1,
  },
  modalFooter: {
    backgroundColor: '#F2F2F2',
    padding: 12,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    boxShadow: '0px -4px 12px rgba(0, 0, 0, 0.2)'
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

export const HomeScreenStyles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  }
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
    aspectRatio: 0.71
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: 'center',
    flex: 1
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
    height: 425,
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
    height: '69%',
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
  menu: {
    marginTop: Platform.OS === 'web' ? 10 : 5,
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
    height: '100%',
    alignSelf: 'center',
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
    backgroundColor: 'skyblue'
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
  },
  avatar: {
    width: 50, 
    height: 50, 
    zIndex: 4, 
    backgroundColor: 'skyblue', 
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
    color: 'skyblue'
  },
  listLabel: {
    userSelect: 'none',
    fontSize: 15,
    marginLeft: 16
  },
  iconSmall: {
    fontSize: 19,
    position: 'relative',
    top: 3,
    width: 24,
    color: 'skyblue'
  },
  separator: {
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)',
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
    gap: 8
  },
  bottomContent: {
    flex: 1,
    position: 'absolute',
    bottom: 30,
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
    fontSize: 28
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
    top: HEADER_HEIGHT,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
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
    height: '75%', 
    position: 'absolute', 
    width: '100%',
    bottom: 0,
    zIndex: 100,
    backgroundColor: 'white',
    borderTopLeftRadius: 40, 
    borderTopRightRadius: 40
  },
  header: {
    fontSize: 20, 
    fontWeight: 600, 
    marginBottom: 24, 
    color: '#333'
  },
  list: {
    padding: Platform.OS === 'web' ? 20 : 0
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
    width: iconWidth,
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
    textAlign: 'center'
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
    color: Colors.light.text,
    transform: [{scaleX: 2}]
  },
  buttonContainer: {
    justifyContent: 'space-between', 
    flexWrap: 'wrap', 
    marginBottom: 48
  },
  expansionShadow: {
    width: '100%', 
    height: 4, 
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)', 
    position: 'relative', 
    top: -4
  }
});