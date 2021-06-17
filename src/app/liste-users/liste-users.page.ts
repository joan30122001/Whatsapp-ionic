import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import user from '../../User';
import { AuthentificationService } from '../services/authentification.service';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-liste-users',
  templateUrl: './liste-users.page.html',
  styleUrls: ['./liste-users.page.scss'],
})
export class ListeUsersPage implements OnInit {

  //azer:any[];
  // users : [];
  public tab = [];
  public TabUserDiscuss=[];
  constructor(
    private authservice :AuthentificationService,
    public router:Router,
    public firestore:AngularFirestore,
    public firestorage:AngularFireStorage,
    public navCtrl:NavController,
  ){


    // this.onGetContries();
    // this.users =firestore.collection('users').valueChanges()


    //recuperer les champs dans firebase

    this.firestore.collection('users/').get().subscribe(images => {
      this.tab=[]
      images.docs.forEach((doc)=>{
        this.TabUserDiscuss.push(doc.data());
      })
      console.log(this.TabUserDiscuss);

      this.TabUserDiscuss.map((element)=>{
        const refImage = this.firestorage.ref(element.photo)
        refImage.getDownloadURL().subscribe(imgUrl => {

              const contact={
                nom: element.name,
                email: element.email,
                image:imgUrl,
              }
            this.tab.push(contact)

        });
      })
      this.TabUserDiscuss=this.tab
      console.log(this.TabUserDiscuss);

    });
  }
  GoToConv( image , nom ){
    this.router.navigate(['/conversations',{image ,nom}]);
  }

  ngOnInit() {
    // firebase.auth().onAuthStateChanged( user=>{
    //   console.log("AUTH_USER",user);
    // })
  }

}
