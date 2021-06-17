import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopovercomponentPage } from '../popovercomponent/popovercomponent.page';

import { Globalization } from '@ionic-native/globalization/ngx';
// import { TranslateService } from '@ngx-translate/core';




@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  public description: string;
  // public name: string;
  public language: string;


  theme:string = "light";

  constructor(
    private router: Router,
    public ngFireAuth: AngularFireAuth,
    private popover: PopoverController,
    private globalization: Globalization,
    // private _translate: TranslateService
    ) {}

  logOut(): void {
    alert("Déconnecté");
    this.ngFireAuth.signOut();
    this.router.navigate(['/login'])
  }

  switchTheme(){
    if(this.theme = "light"){
      document.body.classList.add("dark");
      this.theme = "dark";
    }
    else{
      document.body.classList.remove("dark");
      this.theme = "light";
    }
  }

  CreatePopOver(){
    this.popover.create({component:PopovercomponentPage, showBackdrop:false}).then((popoverElement) => {
      popoverElement.present();
    })
  }

  // async presentPopover(ev: any) {
  //   const popover = await this.popoverController.create({
  //     component: MainPopoverComponent,
  //     event: ev,
  //     translucent: true
  //   });
  //   return await popover.present();
  // }


  // ionViewDidEnter(): void {
  //   this.getDeviceLanguage()
  // }

  // _initialiseTranslation(): void {
  //   this._translate.get('disc').subscribe((res: string) => {
  //     this.description = res;
  //   });
  // }

  // public changeLanguage(): void {
  //   this._translateLanguage();
  // }

  // _translateLanguage(): void {
  //   this._translate.use(this.language);
  //   this._initialiseTranslation();
  // }

  // _initTranslate(language) {
  //   // Set the default language for translation strings, and the current language.
  //   this._translate.setDefaultLang('en');
  //   if (language) {
  //     this.language = language;
  //   }
  //   else {
  //     // Set your language here
  //     this.language = 'en';
  //   }
  //   this._translateLanguage();
  // }

  // getDeviceLanguage() {
  //   if (window.Intl && typeof window.Intl === 'object') {
  //     this._initTranslate(navigator.language)
  //   }
  //   else {
  //     this.globalization.getPreferredLanguage()
  //       .then(res => {
  //         this._initTranslate(res.value)
  //       })
  //       .catch(e => {console.log(e);});
  //   }
  // }



}
