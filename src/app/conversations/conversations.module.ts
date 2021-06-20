import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConversationsPageRoutingModule } from './conversations-routing.module';

import { ConversationsPage } from './conversations.page';
import { Ionic4EmojiPickerModule } from 'ionic4-emoji-picker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConversationsPageRoutingModule,
    Ionic4EmojiPickerModule
  ],
  declarations: [ConversationsPage]
})
export class ConversationsPageModule {}
