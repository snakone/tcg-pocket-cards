import MaterialIcons from '@expo/vector-icons/build/MaterialIcons';

export const ICONS_MAPPING = {
  'house.fill': 'weekend',
  'paperplane.fill': 'send',
  'bookmark.square.fill': 'stacks',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
  'newspaper.fill': 'playlist-add',
  'questionmark.app.fill': 'question-mark'
} as Partial<
  Record<
    import('expo-symbols').SymbolViewProps['name'],
    React.ComponentProps<typeof MaterialIcons>['name']
  >
>;

export type IconSymbolName = keyof typeof ICONS_MAPPING;