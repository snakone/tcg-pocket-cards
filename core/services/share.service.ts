import * as MediaLibrary from 'expo-media-library';
import { Platform } from 'react-native';
import { captureRef } from 'react-native-view-shot';
import { convertBase64ToJpeg } from '@/shared/definitions/utils/functions';

export default class ShareService {
  constructor() {}

  public async makeScreenShot(ref: any, name: string, quality: number = 1): Promise<void> {
    try {
      const localUri = await captureRef(ref, {
        quality,
        format: 'jpg',
        fileName: name || 'deck-tcg-pocket-cards',
        width: 1920,
        height: 2420,
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