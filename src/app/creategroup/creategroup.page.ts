import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, NavParams } from '@ionic/angular';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-creategroup',
  templateUrl: './creategroup.page.html',
  styleUrls: ['./creategroup.page.scss'],
})
export class CreategroupPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl:AlertController,
    private router: Router,
    private authService: AuthentificationService,
  ) { }

  ngOnInit() {
  }

  // ionViewWillEnter(){
  //   this.authService.checkIfSignedIn();
  // }

  // // List of all groups
  // groups = [];

  // onAddGroup(form) {
  //   if (form.valid) {

  //     // As the profile picture is options, display generic image if null.
  //     let profilePicture: string;
  //     if (form.value.profilePicture == null){
  //       profilePicture = "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg";
  //     }
  //     else {
  //       profilePicture = form.value.profilePicture;
  //     }

  //     // create group object from form input
  //     const group: any = { groupName: form.value.groupName, profilePicture: profilePicture,
  //       groupDescription: form.value.groupDescription};

  //     // Create group on Firebase and add currently signed in user as a member.
  //     this.groupService.createGroup(group);

  //     this.router.navigateByUrl('/home'),
  //     form.resetForm();
  //   }
  // }

}
