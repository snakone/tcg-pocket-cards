import { PokemonTypeENUM } from "../enums/pokemon.enums";
import { Card } from "./card.interfaces";

interface ServerResponse {
  ok: boolean;
  message: string;
  err: string;
}

export interface CardsResponse extends ServerResponse {
  cards: Card[];
}

export interface StorageDeck {
  id: number;
  name: string;
  cards: number[];
  valid: boolean;
  energies: PokemonTypeENUM[];
  popular: number[];
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