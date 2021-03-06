import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
/*  add*/
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask, AngularFireStorageModule } from '@angular/fire/storage';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from '../services/authentification.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import user from '../../User';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  image = undefined;

  fileName: string;
  fileSize: string;
  isLoading: boolean;
  isLoaded: boolean;

  imageUpload: AngularFireUploadTask;

  constructor(
    private router: Router,
    public ngFireAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private fb: FormBuilder,
    public authservice: AuthentificationService,
    public storage: AngularFireStorage
  ) {
    this.isLoading = false;
    this.isLoaded = false;
  }

  ngOnInit() {
    this.validationFormUser = this.fb.group({
      names: new FormControl('', Validators.compose([
        Validators.required,
      ])),

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
    names: [
      { type: "required", message: "your full name" },
      { type: "pattern", message: "the name is not correct" }
    ],
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


  logeMe() {
    this.router.navigate(['/login'])
  }

  async register(data) {
    if (this.image != undefined) {

      try {
        this.authservice.registr(data).then(resp => {

          this.signin(this.image, data, resp.user.uid ).then(() => {
            alert('Verified your mail to activate your account  !');
            resp.user.sendEmailVerification();
            console.log("reussi")
          })

          // if (resp.user.email) {

          // }
          // else {
          //   alert('registration failed');
          // }
        })
      }catch (error) {
        console.log(error);
      }
    }else{
      console.log("echec");
    }
  }

  async signin(upload, data, id) {

    this.afs.collection("users").doc(id).set({
      name: data.names,
      email: data.email,
      photo: upload,

    })

  }

  upload(event) {
    // const file =event.target.files;
    const file = event.srcElement.files[0];
    console.log(file);

    //var file.name = file[0];

    // if (fileName.type.split('/')[0] !=="image"){
    //   console.error("File is not and Image");
    //   return;
    // }
    const path = `loginuploads/${"string"}_${file.name}`;

    var fileRef = this.storage.ref(path);

    fileRef.put(file).then(() => this.image = path)
      // this.imageUpload = this.storage.upload(path,fileName)
      ;

  }

}
