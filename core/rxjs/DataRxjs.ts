import { BehaviorSubject } from 'rxjs';

import Storage from "@/core/storage/storage.service";

import { DataStatePayload } from '@/shared/definitions/interfaces/layout.interfaces';
import { CreateDeckData, StorageDeck, TradeItem, UserCollectionItem, UserData } from '@/shared/definitions/interfaces/global.interfaces';
import { DataKey } from '@/shared/definitions/types/global.types';

class DataState {
  private favorites$ = new BehaviorSubject<number[]>([]);
  private decks$ = new BehaviorSubject<StorageDeck[]>([]);
  private trades$ = new BehaviorSubject<TradeItem[]>([]);
  private collection$ = new BehaviorSubject<UserCollectionItem[]>([]);

  public deckPreview$ = new BehaviorSubject<CreateDeckData>({
    active: Array(20).fill(null),
    name: '',
    decks: [],
    energy: false
  });

  private mappedData: Record<DataKey, BehaviorSubject<any>> = {
    'favorites': this.favorites$,
    'decks': this.decks$,
    'trades': this.trades$,
    'collection': this.collection$
  }

  constructor() {}

  public setData({key, value}: DataStatePayload): void {
    this.mappedData[key].next(value);
  }
 
  public setAllData(data: UserData): void {
    Object.keys(data).forEach(
      key => this.setData({key, value: (data as any)[key]} as DataStatePayload)
    );
  }

  public getData<T>(key: DataKey): BehaviorSubject<T> {
    return this.mappedData[key];
  }

  public getDataSync<T>(key: DataKey): T {
    return this.mappedData[key].getValue();
  }

  // FAVORITES
  public addFavorite(id: number): void {
    const favorites = this.favorites$.getValue();
    const value = Array.from(new Set([...favorites, id]));
    this.favorites$.next(value);
    Storage.addFavorite(id);
  }

  public removeFavorite(id: number): void {
    const favorites = this.favorites$.getValue();
    const value = favorites.filter(k => k !== id);
    this.favorites$.next(value);
    Storage.removeFavorite(id);
  }

  // DECKS
  public addDeck(deck: StorageDeck): void {
    const decks = this.decks$.getValue();
    const index = decks.findIndex(d => d.id === deck.id);
  
    const updatedDecks =
      index !== -1
        ? decks.map((d, i) => (i === index ? deck : d))
        : [deck, ...decks.filter(d => d !== null)];
  
    this.decks$.next(updatedDecks);
    Storage.addDeck(deck);
  }

  public removeDeck(id: number): void {
    const decks = this.decks$.getValue();
    const value = decks.filter(k => k.id !== id);
    this.decks$.next(value);
    Storage.removeDeck(id);
  }

  // TRADES
  public addTrade(trade: TradeItem): void {
    const trades = this.trades$.getValue();
    const index = trades.findIndex(d => d.id === trade.id);
  
    const updatedTrades =
      index !== -1
        ? trades.map((d, i) => (i === index ? trade : d))
        : [trade, ...trades.filter(d => d !== null)];
  
    this.trades$.next(updatedTrades);
    Storage.addTrade(trade);
  }

  public removeTrade(id: number): void {
    const trades = this.trades$.getValue();
    const value = trades.filter(k => k.id !== id);
    this.trades$.next(value);
    Storage.removeTrade(id);
  }

  public onDeckPreview(data: any): void {
    this.deckPreview$.next(data);
  }

}

export const DataRxjs = new DataState();