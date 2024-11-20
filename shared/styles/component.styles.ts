import { Platform, StyleSheet } from 'react-native';
import { MENU_WIDTH } from '../definitions/utils/contants';
import { Colors } from '../definitions/utils/colors';

const HEADER_HEIGHT = 100;
const CARD_IMAGE_WIDTH = 103.2;

export const ThemeTextStyles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
  headerTitle: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "bold"
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
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
  },
  content: {
    flex: 1,
    padding: 28,
    paddingBottom: 8,
    gap: 16,
    overflow: 'hidden',
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
  searchInput: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'white',
    marginBottom: 18,
    color: 'Colors.light.text'
  },
  gridContainer: {
    flexWrap: 'nowrap'
  },
  imageContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: CARD_IMAGE_WIDTH,
    height: 142,
    zIndex: 0
  },
  imageTitle: {
    padding: 8,
    fontSize: 13,
    textAlign: 'center',
  },
});

export const IconStyles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    right: -69,
    top: -28,
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  modalScrollView: {
    maxHeight: '70%',
    padding: 16,
    backgroundColor: 'white',
    zIndex: 0
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
    position: 'fixed',
    bottom: Platform.OS === 'web' ? 60 : -100,
    left: 0,
    right: 0,
    alignItems: 'center',
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

export const menuStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: MENU_WIDTH,
    height: 425,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
    position: 'absolute',
    right: 0,
    bottom: 60,
    overflow: 'hidden',
    paddingInline: 24,
    paddingBlock: 42 
  },
});

export const tabButtonStyles = StyleSheet.create({
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

export const customTabButtonStyles = StyleSheet.create({
  icon: {
    fontSize: 24,
    justifyContent: 'center', 
    marginTop: Platform.OS === 'web' ? 9 : 8,
    marginLeft: Platform.OS === 'web' ? 3 : 28,
    display: 'flex'
  },
});

export const layoutStyles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
    position: 'absolute'
  },
});

export const webStyles = StyleSheet.create({
  view: {
    width: 390, 
    height: 844,
    alignSelf: 'center',
    backgroundColor: '#F2F2F2'
  }
});