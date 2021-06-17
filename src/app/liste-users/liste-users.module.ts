import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeUsersPageRoutingModule } from './liste-users-routing.module';

import { ListeUsersPage } from './liste-users.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeUsersPageRoutingModule
  ],
  declarations: [ListeUsersPage]
})
export class ListeUsersPageModule {}
