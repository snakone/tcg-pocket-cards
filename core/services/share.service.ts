import * as MediaLibrary from 'expo-media-library';
import { Platform } from 'react-native';
import { captureRef } from 'react-native-view-shot';
import { Subject } from 'rxjs';

import { convertBase64ToJpeg, getDynamicHeight } from '@/shared/definitions/utils/functions';
import { SettingsState } from '@/hooks/settings.reducer';
import { ShareContentProps } from '@/shared/definitions/interfaces/global.interfaces';

export default class ShareService {

  public static importedSettings$ = new Subject<SettingsState>();
  public static deleteSettings$ = new Subject<void>();

  constructor() {}

  public static onSettingsImport(settings: SettingsState): void {
    this.importedSettings$.next(settings);
  }

  public static onDeleteSettings(): void {
    this.deleteSettings$.next();
  }

  public async makeScreenShot({
    ref, 
    name, 
    quality,
    length,
    type,
    horizontal
  }: ShareContentProps): Promise<void> {
    try {
      const height = getDynamicHeight(length, type, horizontal);
      const localUri = await captureRef(ref, {
        quality,
        format: 'jpg',
        fileName: name || 'deck-tcg-pocket-cards',
        width: 1920,
        height,
      });

      if (Platform.OS === 'web') {
        const link = document.createElement('a');
        link.href = await convertBase64ToJpeg(localUri, quality || 1);
        link.download = name.endsWith('.jpeg') ? name : `${name}.jpeg` || 'deck.jpeg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
      } else {
        await MediaLibrary.saveToLibraryAsync(localUri);
      }
    } catch (e) {
      console.log(e);
    }
  };

  public async makeInfoGraphic(
    ref: React.MutableRefObject<any>, 
    name: string, 
    quality: number = 1
  ): Promise<void> {
    try {
      const localUri = await captureRef(ref, {
        quality,
        format: 'jpg',
        fileName: name || 'infographic-tcg-pocket-cards',
        width: 1280,
      });

      if (Platform.OS === 'web') {
        const link = document.createElement('a');
        link.href = await convertBase64ToJpeg(localUri, quality);
        link.download = name.endsWith('.jpeg') ? name : `${name}.jpeg` || 'infographic-tcg-pocket-cards.jpeg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
      } 
    } catch (e) {
      console.log(e);
    }
  };

}

