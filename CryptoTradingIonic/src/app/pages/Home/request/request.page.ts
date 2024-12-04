import { Component, OnInit } from '@angular/core';
import { MenuController, PopoverController } from '@ionic/angular';
import { FilterModalComponent } from 'src/app/shared-components/filter-modal/filter-modal.component';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {
  isModalOpen: boolean = false;
  constructor(
    private menuCtrl: MenuController,
    private popoverCtrl: PopoverController
  ) {}
  async openFilters(event: any) {
    const popover = await this.popoverCtrl.create({
      component: FilterModalComponent,
      event: event,
      translucent: true,
    });

    await popover.present();
  }
  openmenu() {
    this.menuCtrl.enable(true, 'main-Id');
    this.menuCtrl.open('main-Id');
  }

  openAddSignalModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  ngOnInit() {}

  handleSignalAdded(signal: any) {
    console.log(signal)
    // this.signalService.addSignal(signal);
    this.closeModal();
  }
}
