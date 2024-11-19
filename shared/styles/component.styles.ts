import { StyleSheet } from 'react-native';

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
    paddingTop: 26
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
    marginBottom: 18
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
    height: 150,
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
    padding: 3,
    borderRadius: 50,
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid',
    width: 24,
    height: 24,
  },
  icon: {
    color: 'grey',
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
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2)',
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
    backgroundColor: '#F2F2F2',
    zIndex: 0
  },
  modalFooter: {
    backgroundColor: 'white',
    padding: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
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
  }
});