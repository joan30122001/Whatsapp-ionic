import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ConversationsPage } from './conversations/conversations.page';

import { environment } from '../environments/environment.prod';

import{AngularFireModule} from '@angular/fire';
import{AngularFireAuth, AngularFireAuthModule}  from'@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database'; // pour manipuler la base de données Firebase
import { AngularFireStorageModule } from '@angular/fire/storage'; // pour accéder aux fonction de stockage et de récupération des fichiers

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

import {PopovercomponentPageModule} from './popovercomponent/popovercomponent.module';

// import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { TranslateConfigService } from './services/translate-config.service';

import { Globalization } from '@ionic-native/globalization/ngx';

import {NgxQRCodeModule} from 'ngx-qrcode2';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';

// import { IonicStorageModule } from '@ionic/storage';
// import { create } from 'domain';

// export function HttpLoaderFactory(http: HttpClient){
//   return new TranslateHttpLoader(http, "assets/i18n/", ".json")
// }

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    PopovercomponentPageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    // HttpClientModule,
    NgxQRCodeModule,
    // IonicStorageModule.forRoot(),
    // TranslateModule.forRoot({
    //   loader:{
    //     provide: TranslateLoader,
    //     useFactory: (HttpLoaderFactory),
    //     deps: [HttpClient]
    //   }
    // })
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Globalization, AngularFireStorage],
  bootstrap: [AppComponent],
})
export class AppModule {}
