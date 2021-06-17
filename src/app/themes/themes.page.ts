import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.page.html',
  styleUrls: ['./themes.page.scss'],
})
export class ThemesPage implements OnInit {

  constructor(
    private router: Router,
    private nav: NavController,
    private modalctrl: ModalController
  ) { }

  ngOnInit() {
  }

  toggleTheme(event){
    if(event.detail.checked){
      document.body.setAttribute('color-theme', 'dark')
    }
    else{
      document.body.setAttribute('color-theme', 'light')
    }
  }

  backmenu(){
    this.modalctrl.dismiss();
    // this.router.navigate(['./tab1'])
  }

}
