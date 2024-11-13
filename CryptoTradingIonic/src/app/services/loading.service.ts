import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loading: HTMLIonLoadingElement | null = null;

  constructor(private loadingController: LoadingController) {}

  async showLoading() {
    if (!this.loading) {
      this.loading = await this.loadingController.create({
        message: 'Cargando...',
        spinner: 'crescent'
      });
      await this.loading.present();
    }
  }

  async hideLoading() {
    // Espera hasta que `this.loading` no sea null
    if (!this.loading) {
      await new Promise(resolve => {
        const interval = setInterval(() => {
          if (this.loading) {
            clearInterval(interval);
            resolve(true);
          }
        }, 50);
      });
    }

    if (this.loading) {
      await this.loading.dismiss();
      this.loading = null;
    }
  }
}
