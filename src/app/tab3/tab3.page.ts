import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage} from '@angular/fire/storage'; // Pour les fonctions de stockage et de récupération des fichiers
import { AngularFireDatabase } from '@angular/fire/database'; // pour la manipulation la base de données Firebase


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  users : Observable<any[]>;
  images = [];

  constructor(
    private nav:NavController,
    private router: Router,
    public firestore: AngularFirestore,
    public afDB: AngularFireDatabase,
    public afST: AngularFireStorage
  ) {
    //recuperer les infos des utilisateurs
    this.users =firestore.collection('users').valueChanges();
    console.log(this.users);
    ///recupere les images
  }
  discute(){
    this.router.navigate(['liste-users'])
  }

}
