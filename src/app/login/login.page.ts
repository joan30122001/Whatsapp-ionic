import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from '../services/authentification.service';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router,
    public ngFireAuth: AngularFireAuth,
    private fb: FormBuilder,
    private authservice: AuthentificationService,
    private Storage: AngularFireStorage,
    private nav:NavController,
    private firestore : AngularFirestore
  ) { }

  ngOnInit() {
    this.validationFormUser = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),

      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ]))
    })
  }

  validationUserMessage = {
    email: [
      { type: "required", message: "Please enter your Email" },
      { type: "pattern", message: "the email is not correct" }
    ],
    password: [
      { type: "required", message: "Please enter your password" },
      { type: "pattern", message: "the password must be at least 5characters or more " }
    ]
  }

  validationFormUser: FormGroup;



  async logeMe(value) {

    try {
      this.authservice.logeMen(value).then(resp => {
        console.log(resp);
        if (resp.user.email) {


         this.router.navigate(['/tabs/tab3'])
          alert('login success ');

       } else {
          alert('login failed! ');
/*
        this.authservice.setUser({
          username: resp.user.displaName,
          uid: resp.user.uid
        })

        const userProfile = this.firestore.collection('profile').doc(resp.user.uid);

        userProfile.get().subscribe( result =>{
          if(result.exists){
            this.nav.navigateForward(['tabs/tab3']);
          }else{
            this.firestore.doc('profile/${this.authservice.getUserUid()}').set({
              name: resp.user.displayName,
              email: resp.user.email
            });
          }
        })*/
        }

      })
    }
    catch (err) {
      console.log(err);
    }

  }


  inscription() {
    this.router.navigate(['/register'])
  }
  forgetP() {
    this.router.navigate(['/reset-password'])
  }

}
