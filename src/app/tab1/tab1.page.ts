import { Component } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { ActionSheetController, NavController, NavParams } from '@ionic/angular';
import { UserPhoto, PhotoService } from '../services/photo.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public yes = false;

  constructor(
    public contactsService: ContactsService,
    public photoService: PhotoService,
    public actionSheetController: ActionSheetController,
    private router: Router
    // public navCtrl: NavController,
    // public navParams: NavParams
  ) {

  }

  ionViewDidLoad(){
    console.log('ionviewDidLoad Tabs1Page')
  }

  load(){

    this.yes = true;
    setTimeout(function(){
      this.yes = false;
    }.bind(this), 7000)
    $(document).ready(function(){
      var lp = 0,
      progress = setInterval(function(){
        $('.progress-outer .progress-inner').css({'width':lp+'%'})
        if(lp == 100){
          clearInterval(progress);
        }
        else{
          lp = lp+1;
        }
      },70);
    });
  }
  // async ngOnInit() {
  //   await this.photoService.loadSaved();
  // }

  // public async showActionSheet(photo: UserPhoto, position: number) {
  //   const actionSheet = await this.actionSheetController.create({
  //     header: 'Photos',
  //     buttons: [{
  //       text: 'Delete',
  //       role: 'destructive',
  //       icon: 'trash',
  //       handler: () => {
  //         this.photoService.deletePicture(photo, position);
  //       }
  //     }, {
  //       text: 'Cancel',
  //       icon: 'close',
  //       role: 'cancel',
  //       handler: () => {
  //         // Nothing to do, action sheet is automatically closed
  //        }
  //     }]
  //   });
  //   await actionSheet.present();
  // }

}
