import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class IntroService {
  private hasSeenIntroKey = 'hasSeenIntro';

  constructor(private storage: Storage) {
    this.storage.create(); // Inicializa el storage
  }

  async hasSeenIntro(): Promise<boolean> {
    return (await this.storage.get(this.hasSeenIntroKey)) || false;
  }

  async setHasSeenIntro(): Promise<void> {
    await this.storage.set(this.hasSeenIntroKey, true);
  }
}
