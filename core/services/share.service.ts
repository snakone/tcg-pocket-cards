import * as MediaLibrary from 'expo-media-library';
import { Platform } from 'react-native';
import { captureRef } from 'react-native-view-shot';
import { convertBase64ToJpeg, getDynamicheight } from '@/shared/definitions/utils/functions';
import { SettingsState } from '@/hooks/settings.reducer';
import { Subject } from 'rxjs';

export default class ShareService {

  public static importedSettings$ = new Subject<SettingsState>();

  constructor() {}

  public static onImport(settings: SettingsState): void {
    this.importedSettings$.next(settings);
  }

  public async makeScreenShot(
    ref: React.MutableRefObject<any>, 
    name: string, 
    quality: number = 1,
    length: number
  ): Promise<void> {
    try {
      const height = getDynamicheight(length);
      const localUri = await captureRef(ref, {
        quality,
        format: 'jpg',
        fileName: name || 'deck-tcg-pocket-cards',
        width: 1920,
        height,
      });

      if (Platform.OS === 'web') {
        const link = document.createElement('a');
        link.href = await convertBase64ToJpeg(localUri, quality);
        link.download = name || 'deck';
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
  
}
