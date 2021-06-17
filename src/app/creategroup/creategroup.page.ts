import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-creategroup',
  templateUrl: './creategroup.page.html',
  styleUrls: ['./creategroup.page.scss'],
})
export class CreategroupPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl:AlertController
  ) { }

  ngOnInit() {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad CreateGroupPage');
  // }

  // createGroup() {
  //   this.userService.addGroup(this.newGroup).then(() => {
  //     this.navCtrl.pop();
  //   }).catch((err) => {
  //     alert(JSON.stringify(err));
  //   })
  // }

  // editGroupName() {
  //   let alert = this.alertCtrl.create({
  //     title: 'Edit Group Name',
  //     inputs: [{
  //       name: 'groupname',
  //       placeholder: 'Give a new groupname'
  //     }],
  //     buttons: [{
  //       text: 'Cancel',
  //       role: 'cancel',
  //       handler: data => {

  //       }
  //     },
  //     {
  //       text: 'Set',
  //       handler: data => {
  //         if (data.groupname) {
  //           this.newGroup.groupName = data.groupname
  //         }

  //         else {
  //           this.newGroup.groupName = 'groupName';
  //         }
  //       }
  //     }
  //     ]
  //   });
  //   alert.present();
  // }

}
