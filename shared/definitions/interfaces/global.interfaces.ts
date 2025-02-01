import { StyleProp, TextStyle, ImageStyle } from "react-native";
import { PokemonTypeENUM } from "../enums/pokemon.enums";
import { Card } from "./card.interfaces";
import { LanguageType } from "../types/global.types";

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
  id: string;
  title: string;
  tcg: number[];
  discord: string;
  desired: number;
  offer: number[];
  created: number;
  valid: boolean;
}