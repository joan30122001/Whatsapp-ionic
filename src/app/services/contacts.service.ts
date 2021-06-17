import { Injectable } from '@angular/core';


export interface ContactModel {
  contactName: string;
  contactAvatar: string;
  snippet: string;
  time: Date;
}
@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts: ContactModel[];
  user = {
    avatar:
    "../assets/sign.png"
  };



  constructor() {
      // example: fetch data from API
      this.contacts = this.getData();
   }
   getData(): ContactModel[] {
    return [
      {
        contactName: "Loic",
        contactAvatar:
          "../assets/sign.png",
        snippet: "Listen, I've had a pretty messed up day...",
        time: new Date(Date.now())
      },
      {
        contactName: "Delano",
        contactAvatar:
           "../assets/sign.png",
        snippet: "I've got enough on my plate as it is, and I...",
        time: new Date(Date.now())
      }
    ];
  }
}
