import { Component, OnInit, ViewChild} from '@angular/core';
import { from } from 'rxjs';
import user from '../../User';
import{ ActivatedRoute } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { IonContent } from '@ionic/angular';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';


export interface User {
  uid: string;
  email: string;
}


@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.page.html',
  styleUrls: ['./conversations.page.scss'],
})
export class ConversationsPage implements OnInit {

  messages = [];
  messageText: any;


  //mesasage implementation

  connected = false;
  userId: any;
  idTchat = "";
  currentUser = null;
  showEmojiPicker:boolean=false;
  newMsg: string = "";

  addEmoji(event) {
    this.newMsg=this.newMsg+event.char;
  }
  // showEmojiPicker = false;
  // messages = [
  //   {
  //     user: 'loic',
  //     createdAt: 1554090856000,
  //     msg: 'Bonjour comment tu vas ?'
  //   },
  //   {
  //     user: 'bro',
  //     createdAt: 1554090856000,
  //     msg: 'Cava et toi ?'
  //   },
  //   {
  //     user: 'loic',
  //     createdAt: 1554090856000,
  //     msg: 'Ahhhh moi cava'
  //   }
  // ];

  // currentUser = 'loic';
  // newMsg = '';
  // @ViewChild(IonContent) content: IonContent


  // messageText: any;
  // nom:any;
  // image:any;

  // public TabUserDiscuss=[];
  // public tab = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private nav: NavController,
    public firestore:AngularFirestore,
    public firestorage:AngularFireStorage,
    public afAuth: AngularFireAuth
  ) {
    // this.image= this.route.snapshot.paramMap.get('image');
    // this.nom = this.route.snapshot.paramMap.get('nom');

    this.afAuth.onAuthStateChanged((user) => {
      this.currentUser = user.uid;
    });
  }

  ngOnInit() {
  }

  // sendMessage() {
  //   console.log(' messageText:' + this.messageText);
  // }

  backmenu(){
    // this.modalctrl.dismiss();
    this.router.navigate(['./tabs/tab3'])
  }





  // switchEmojiPicker() {
  //   this.showEmojiPicker = !this.showEmojiPicker;
  //   // if (!this.showEmojiPicker) {
  //   //   this.focus();
  //   // } else {
  //   //   this.setTextareaScroll();
  //   // }
  //   // this.content.resize();
  //   // this.scrollToBottom();
  // }

  // sendMessage(){
  //   this.messages.push({
  //     user: 'loic',
  //     createdAt: new  Date().getTime(),
  //     msg: this.newMsg
  //   });

  //   this.newMsg = '';
  //   setTimeout(() => {
  //     this.content.scrollToBottom(200);
  //   });

  // }





  sendMessage() {
      console.log(' messageText:' + this.messageText);
      this.firestore.collection('conversations/').doc(this.currentUser.uid + this.currentUser.uid).collection('messages/').add({
        text: this.messageText,
        date: new Date().toISOString(),
        Heure: `${new Date().getHours()}:${new Date().getMinutes()}`,
        uid: this.currentUser.uid,
        nom: this.currentUser.nom,




      });


    this.messageText = '';
  }



  getMessagess() {

      this.firestore.collection('conversations/').doc(this.currentUser.uid+this.currentUser.uid).collection('messages/', ref => ref.orderBy(`date`)).snapshotChanges(['added'])
        .subscribe(actions => {
          this.messages = [];
          actions.forEach(action => {
            console.log('Messages:' + action.payload.doc.data()['text'],);
            this.messages.push({
              userId: action.payload.doc.get('uid'),
              text: action.payload.doc.get('text'),
              date: action.payload.doc.get('date'),
              heure: action.payload.doc.get('heure'),


            });
          });
        });

    }


}

function id(id: any) {
  throw new Error('Function not implemented.');
}
