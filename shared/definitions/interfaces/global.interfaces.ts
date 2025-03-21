import { StyleProp, TextStyle, ImageStyle } from "react-native";
import { PokemonTypeENUM } from "../enums/pokemon.enums";
import { Card } from "./card.interfaces";
import { LanguageType } from "../types/global.types";
import { CardLanguageENUM, CardRarityENUM } from "../enums/card.enums";
import { EXPANSION } from "../enums/packs.enums";

interface ServerResponse {
  ok: boolean;
  message: string;
  err: string;
}

export interface CardsResponse extends ServerResponse {
  cards: Card[];
}

export interface PocketNewsResponse extends ServerResponse {
  news: PocketNews[];
}

export interface StorageDeck {
  id: number;
  name: string;
  cards: number[];
  valid: boolean;
  energies: PokemonTypeENUM[];
  popular: number[];
  created: number;
}

export interface UserProfile {
  name: string;
  avatar: string;
  coin: string;
  best: number | null;
}

export interface AvatarIcon {
  label: string;
  value: string;
  icon: any;
}

export interface ExpansionEmblem {
  label: string;
  value: EXPANSION | number;
  icon: any;
}

export interface PocketNews {
  _id: string;
  title: Record<LanguageType, string>;
  image: string;
  date: any;
  type: 'pocket' | 'game';
  content: Record<LanguageType, NewsContent[]>;
}

export type NewsContent =
  | { type: 'title'; value: string; style?: StyleProp<TextStyle> }
  | { type: 'text'; value: string; style?: StyleProp<TextStyle> }
  | { type: 'image'; value: string; style?: StyleProp<ImageStyle> };

export interface TradeItem {
  id: number;
  title: string;
  tcg: string[];
  discord: string;
  desired: (number | null)[];
  offers: (number | null)[];
  created: number;
  valid: boolean;
}

export interface UserCollection {
  id: number;
  amount: Record<CardLanguageENUM, number>
}

export interface CollectionStat {
  name: any;
  label: string;
  owned: number;
  missing?: number;
  perct_owned: string;
  perct_missing?: string;
  length: number;
  emblem: any;
  crown: number,
  art: number
}

export interface CollectionElementStat {
  owned: number;
  length: number;
  icon: any;
}

export interface CollectionRarityStat {
  owned: number;
  length: number;
  icon: any;
  amount: number;
  value: CardRarityENUM
}