import { BehaviorSubject } from 'rxjs';

import SoundService from '../services/sounds.service';

class ModalState {
  private menuModal$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  public getMenu(): BehaviorSubject<boolean> {
    return this.menuModal$;
  }

  public setMenuVisibility(value: boolean): void {
    this.menuModal$.next(value);
    value ? SoundService.play('AUDIO_MENU_OPEN') :
      SoundService.play('AUDIO_MENU_CLOSE');
  }
}

export const ModalRxjs = new ModalState();