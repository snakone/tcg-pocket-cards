import MaterialIcons from '@expo/vector-icons/build/MaterialIcons';

export const ICONS_MAPPING = {
  'house.fill': 'weekend',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
  'newspaper.fill': 'add-box',
  'menubar.rectangle' : 'menu',
  'questionmark.app.fill': 'question-mark',
  'star': 'star-outline',
  'washer.circle': 'settings',
  'clear': 'close',
  'wind': 'insert-chart-outlined',
  'chevron.right.circle': 'chevron-right',
  'terminal': 'info-outline',
  'candybarphone': 'lock-outline',
  'location.fill': 'help-outline',
  'laurel.leading': 'insert-chart-outlined',
  'door.garage.open': 'bookmark-outline',
  'mail': 'mail-outline',
  'note': 'bookmark-outline',
  'arrow.backward.circle': 'arrow-back-ios',
  'arrow.forward.circle': 'arrow-forward-ios',
  'suit.heart': 'content-paste-search',
  'cat.circle': 'my-location',
  'voiceover': 'volume-up',
  'video.circle': 'volume-off',
  'app.dashed': 'music-note',
  'app.badge': 'music-off',
} as Partial<
  Record<
    import('expo-symbols').SymbolViewProps['name'],
    React.ComponentProps<typeof MaterialIcons>['name']
  >
>;

export type IconSymbolName = keyof typeof ICONS_MAPPING;