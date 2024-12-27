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