import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
})
export class FilterModalComponent {
  filters = {
    orderType: 'all',
    educator: '',
    startDate: '',
    endDate: '',
  };

  constructor(private modalCtrl: ModalController) {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  applyFilters() {
    console.log(this.filters);
    this.modalCtrl.dismiss(this.filters);
  }
}
