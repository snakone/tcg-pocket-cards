import { Card } from "./card.interfaces";

interface ServerResponse {
  ok: boolean;
  message: string;
  err: string;
}

export interface CardsResponse extends ServerResponse {
  cards: Card[];
}