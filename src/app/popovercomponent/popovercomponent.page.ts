import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { NavController, ModalController } from '@ionic/angular';
import { ThemesPage } from '../themes/themes.page';
import { LanguePage } from '../langue/langue.page';
import { QrcodePage } from '../qrcode/qrcode.page';

@Component({
  selector: 'app-popovercomponent',
  templateUrl: './popovercomponent.page.html',
  styleUrls: ['./popovercomponent.page.scss'],
})
export class PopovercomponentPage implements OnInit {

  value = 0;

  constructor(
    private popover: PopoverController,
    private nav: NavController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  // ClosePopover(){
  //   this.popover.dismiss();
  // }

  async openModal(){
    const modal = await this.modalController.create({
      component: ThemesPage,
      componentProps: {
        custom_id: this.value
      }
    });
    modal.present();
  }

  async openModals(){
    const modal = await this.modalController.create({
      component: LanguePage,
      componentProps: {
        custom_id: this.value
      }
    });
    modal.present();
  }

  async opensModals(){
    const modal = await this.modalController.create({
      component: QrcodePage,
      componentProps: {
        custom_id: this.value
      }
    });
    modal.present();
  }

}
