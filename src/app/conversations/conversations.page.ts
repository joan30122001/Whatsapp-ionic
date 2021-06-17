import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import user from '../../User';
import{ ActivatedRoute } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.page.html',
  styleUrls: ['./conversations.page.scss'],
})
export class ConversationsPage implements OnInit {

  messageText: any;
  nom:any;
  image:any;

  // public TabUserDiscuss=[];
  // public tab = [];

  constructor(
    private route: ActivatedRoute,
    private nav: NavController,
    public firestore:AngularFirestore,
    public firestorage:AngularFireStorage
  ) {
    this.image= this.route.snapshot.paramMap.get('image');
    this.nom = this.route.snapshot.paramMap.get('nom');
   }

  ngOnInit() {
  }

  sendMessage() {
    console.log(' messageText:' + this.messageText);
  }

}
