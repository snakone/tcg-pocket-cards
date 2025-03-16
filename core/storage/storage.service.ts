import { SettingsState } from '@/hooks/settings.reducer';
import { CollectionUser } from '@/shared/definitions/classes/collection.class';
import { CardLanguageENUM } from '@/shared/definitions/enums/card.enums';
import { StorageDeck, TradeItem, UserCollection, UserProfile } from '@/shared/definitions/interfaces/global.interfaces';
import { areAllAmountsZero } from '@/shared/definitions/utils/functions';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Storage {

  constructor() {}

  static keys = [
    'music', 
    'sound',
    'language',
    'version',
    'music_volume',
    'sound_volume',
    'show_intro',
    'favorites',
    'cards',
    'decks',
    'trades',
    'collection'
  ];

  static profileKeys = [
    'name',
    'avatar',
    'coin',
    'best'
  ];

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

  public static setSettings(settings: SettingsState): void {
    for (const key of Object.keys(settings)) {
      this.set(key, (settings as any)[key]);
    }
  }

  public static async loadSettings(): Promise<SettingsState> {
    let settings: {[key: string]: any} = {}

    for (const key of [...this.keys, ...this.profileKeys]) {
      settings[key] = await this.get(key);
    }

    return settings as SettingsState;
  }

  public static async setFavorite(id: number): Promise<any | null> {
    try {
      const favorites: number[] = await this.get('favorites');
      if (favorites !== null) {
        const value = Array.from(new Set([...favorites, id]));
        this.set('favorites', value);
      }
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
      const decks: StorageDeck[] = await this.get('decks');
      if (decks !== null) {
        const index = decks.findIndex(d => d.id === data.id);
        let value: StorageDeck[];
        if (index !== -1) {
          decks[index] = data;
          value = decks;
        } else {
          value = [...decks, data];
        }

        this.set('decks', value);
      }
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
      const trades: TradeItem[] = await this.get('trades');
      if (trades !== null) {
        const index = trades.findIndex(d => d.id === data.id);
        let value: TradeItem[];
        if (index !== -1) {
          trades[index] = data;
          value = trades;
        } else {
          value = [...trades, data];
        }

        this.set('trades', value);
      }
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
    let profile: UserProfile = {name: '', avatar: 'eevee', coin: 'eevee', best: null};

    for (const key of this.profileKeys) {
      (profile as any)[key] = await this.get(key);
    }

    return profile as UserProfile;
  }

  public static async addToCollection(id: number, lang: CardLanguageENUM): Promise<any | null> {
    try {
      let collection: UserCollection[] = await this.get('collection');
      if (collection !== null) {
        const item = collection.find(d => d.id === id);
        
        if (item) {
          item.amount[lang]++;
        } else {
          collection = [...collection, new CollectionUser(id, lang)]
        }

        this.set('collection', collection);
      }
    } catch (e) {
      console.log(e);
    }
  }

  public static async removeFromCollection(id: number, lang: CardLanguageENUM): Promise<any | null> {
    try {
      let collection: UserCollection[] = await this.get('collection');
      if (collection !== null) {
        const item = collection.find(d => d.id === id);
        
        if (item) {
          item.amount[lang]--;
        }

        if (item && areAllAmountsZero(item)) {
          collection = collection.filter(coll => coll.id !== id);
        }

        this.set('collection', collection);
      }
    } catch (e) {
      console.log(e);
    }
  }

}