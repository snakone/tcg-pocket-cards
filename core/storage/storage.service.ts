import AsyncStorage from '@react-native-async-storage/async-storage';

import { settingsInitialState, SettingsState } from '@/hooks/settings.reducer';
import { CollectionUser } from '@/shared/definitions/classes/collection.class';
import { CardLanguageENUM } from '@/shared/definitions/enums/card.enums';
import { areAllAmountsZero } from '@/shared/definitions/utils/functions';
import { DEFAULT_PROFILE } from '@/shared/definitions/utils/constants';
import { Card } from '@/shared/definitions/interfaces/card.interfaces';
import { StorageDeck, TradeItem, UserCollectionItem, UserData, UserProfile } from '@/shared/definitions/interfaces/global.interfaces';

export default class Storage {

  constructor() {}

  static settingsKeys: (keyof SettingsState)[]  = [
    'music', 
    'sound',
    'language',
    'version',
    'music_volume',
    'sound_volume',
    'show_intro',
  ];

  static dataKeys: (keyof UserData)[] = [
    'favorites',
    'decks',
    'trades',
    'collection'
  ];

  static profileKeys: (keyof UserProfile)[] = [
    'name',
    'avatar',
    'coin',
    'best'
  ];

  private static async loadCategory<T extends Record<any, any>>(
    keys: (keyof T)[]
  ): Promise<T> {
    const entries = await Promise.all(
      keys.map(async (key) => [key, await this.get(key as string)])
    );
    return Object.fromEntries(entries) as T;
  }

  public static async set(key: string, value: any): Promise<void> {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  }

  public static async get(key: string): Promise<any | null> {
    try {
      const value = await AsyncStorage.getItem(key);
      return value != null ? JSON.parse(value) : null;
    } catch (e) {
      console.log(e);
    }
  }

  public static async setSettings(settings: SettingsState): Promise<void> {
    try {
      const entries: [string, string][] = Object.entries(settings).map(
        ([key, value]) => [key, JSON.stringify(value)]
      );

      await AsyncStorage.multiSet(entries);
    } catch (e) {
      console.error(e);
    }
  }

  public static async deleteSettings(): Promise<void> {
    for (const key of this.settingsKeys) {
      await this.set(key, (settingsInitialState as any)[key]);
    }
  }

  public static async deleteProfile(): Promise<void> {
    for (const key of this.profileKeys) {
      await this.set(key, (DEFAULT_PROFILE as any)[key]);
    }
  }

  public static async deleteData(): Promise<void> {
    for (const key of this.dataKeys) {
      await this.set(key, []);
    }
  }

  public static async reload(): Promise<void> {
    await Promise.all([
      this.deleteSettings(),
      this.deleteProfile(),
      this.deleteData()
    ])
  }

  public static async loadSettings(): Promise<{
    cards: Card[],
    settings: SettingsState;
    data: UserData,
    profile: UserProfile
  }> {
    const [cards, settings, data, profile] = await Promise.all([
      this.get('cards'),
      this.loadCategory<SettingsState>(this.settingsKeys),
      this.loadCategory<UserData>(this.dataKeys),
      this.loadCategory<UserProfile>(this.profileKeys),
    ]);

    return { cards, settings, data, profile };
  }

  public static async addFavorite(id: number): Promise<any | null> {
    try {
      const favorites: number[] = await this.get('favorites') || [];
      const value = Array.from(new Set([...favorites, id]));
      this.set('favorites', value);
    } catch (e) {
      console.log(e);
    }
  }
  
  public static async removeFavorite(id: number): Promise<any | null> {
    try {
      const favorites: number[] = await this.get('favorites');
      if (favorites !== null) {
        const value = favorites.filter(f => f !== id);
        this.set('favorites', value);
      }
    } catch (e) {
      console.log(e);
    }
  }

  public static async addDeck(data: StorageDeck): Promise<any | null> {
    try {
      const decks: StorageDeck[] = await this.get('decks') || [];
      let value: StorageDeck[];
      
      const index = decks?.findIndex(d => d.id === data.id);
      if (index !== -1) {
        decks[index] = data;
        value = decks;
      } else {
        value = [...decks, data];
      }

      this.set('decks', value);
    } catch (e) {
      console.log(e);
    }
  }

  public static async removeDeck(id: number): Promise<any | null> {
    try {
      const decks: StorageDeck[] = await this.get('decks');
      if (decks !== null) {
        const value = decks.filter(deck => deck.id !== id);
        this.set('decks', value);
      }
    } catch (e) {
      console.log(e);
    }
  }

  public static async addTrade(data: TradeItem): Promise<any | null> {
    try {
      const trades: TradeItem[] = await this.get('trades') || [];
      let value: TradeItem[];
  
      const index = trades.findIndex(d => d.id === data.id);
      
      if (index !== -1) {
        trades[index] = data;
        value = trades;
      } else {
        value = [...trades, data];
      }
      
      this.set('trades', value);
    } catch (e) {
      console.log(e);
    }
  }

  public static async removeTrade(id: number): Promise<any | null> {
    try {
      const trades: TradeItem[] = await this.get('trades');
      if (trades !== null) {
        const value = trades.filter(trade => trade.id !== id);
        this.set('trades', value);
      }
    } catch (e) {
      console.log(e);
    }
  }

  public static async getProfile(): Promise<UserProfile> {
    let profile: UserProfile = DEFAULT_PROFILE;

    for (const key of this.profileKeys) {
      (profile as any)[key] = await this.get(key);
    }

    return profile as UserProfile;
  }

  public static async setProfile(profile: UserProfile): Promise<void> {
    try {
      const entries: [string, string][] = Object.entries(profile).map(
        ([key, value]) => [key, JSON.stringify(value)]
      );

      await AsyncStorage.multiSet(entries);
    } catch (e) {
      console.error(e);
    }
  }

  public static async addToCollection(id: number, lang: CardLanguageENUM): Promise<any | null> {
    try {
      let collection: UserCollectionItem[] = await this.get('collection') || [];
      const item = collection.find(d => d.id === id);
      
      if (item) {
        item.amount[lang]++;
      } else {
        collection = [...collection, new CollectionUser(id, lang)]
      }

      this.set('collection', collection);
      
    } catch (e) {
      console.log(e);
    }
  }

  public static async removeFromCollection(id: number, lang: CardLanguageENUM): Promise<any | null> {
    try {
      let collection: UserCollectionItem[] = await this.get('collection') || [];
      if (collection !== null) {
        const item = collection.find(d => d.id === id);
        
        if (item) {
          item.amount[lang]--;
        }

        if (item && areAllAmountsZero(item)) {
          collection = collection.filter(coll => coll.id !== id);
        }
      }

      this.set('collection', collection);
    } catch (e) {
      console.log(e);
    }
  }

}