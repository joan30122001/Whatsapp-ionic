import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateConfigService } from '../services/translate-config.service';


@Component({
  selector: 'app-langue',
  templateUrl: './langue.page.html',
  styleUrls: ['./langue.page.scss'],
})
export class LanguePage implements OnInit {

  Language:string;

  constructor(
    private modalctrl: ModalController,
    private translateConfigService: TranslateConfigService
  ) {
    this.Language = this.translateConfigService.getDefaultLanguage();
   }

  ngOnInit() {
  }

  backmenu(){
    this.modalctrl.dismiss();
    // this.router.navigate(['./tab1'])
  }

  languageChanged(){
    this.translateConfigService.setLanguage(this.Language);
  }

}
