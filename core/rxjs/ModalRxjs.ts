import { BehaviorSubject, combineLatest, Observable } from 'rxjs';

import SoundService from '../services/sounds.service';
import { ModalStatePayload } from '@/shared/definitions/interfaces/layout.interfaces';
import { ModalType } from '@/shared/definitions/types/global.types';

class ModalState {
  private cardsModal$ = new BehaviorSubject<boolean>(false);
  private attacksModal$ = new BehaviorSubject<boolean>(false);
  private cardsSortModal$ = new BehaviorSubject<boolean>(false);
  private attacksSortModal$ = new BehaviorSubject<boolean>(false);
  private avatarModal$ = new BehaviorSubject<boolean>(false);
  private coinModal$ = new BehaviorSubject<boolean>(false);
  private bestModal$ = new BehaviorSubject<boolean>(false);

  private mappedModals: Record<ModalType, BehaviorSubject<boolean>> = {
    'cards': this.cardsModal$,
    'attacks': this.attacksModal$,
    'cardsSort': this.cardsSortModal$,
    'attacksSort': this.attacksSortModal$,
    'avatar': this.avatarModal$,
    'coin': this.coinModal$,
    'best': this.bestModal$,
  }

  constructor() {}

  public getModal(key: ModalType): BehaviorSubject<boolean> {
    return this.mappedModals[key];
  }

  public setModalVisibility({key, value}: ModalStatePayload) {
    this.mappedModals[key].next(value);
    value ? SoundService.play('AUDIO_MENU_OPEN') :
      SoundService.play('AUDIO_MENU_CLOSE');
  }

  public getAllRefs(): Observable<boolean[]> {
    return combineLatest<boolean[]>([
      this.cardsModal$,
      this.attacksModal$,
      this.cardsSortModal$,
      this.attacksSortModal$,
      this.avatarModal$,
      this.coinModal$,
      this.bestModal$
    ])
  }
}

export const ModalRxjs = new ModalState();