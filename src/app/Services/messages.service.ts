import { Injectable } from '@angular/core';
import {Message} from'../Models/message/message.module'
import { Nurse } from '../Models/nurse/nurse.module';
import { nMessagePerNurse } from '../Models/n-messages-per-nurse/n-messages-per-nurse.module';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

nursesMessages:Message[]=[]
nMessagePerNurse:nMessagePerNurse[]=[]

  constructor() { }

addMess(nurse:Nurse,dateMessSend:Date,dateDestination:Date,depInDateDes:string,mishmeretDateDes:string,raison:string,){
   
let isSend=true;
let isAutorised=false
let isGotResFromAdmin=false
let mess={nurse,dateMessSend,dateDestination,depInDateDes,mishmeretDateDes,raison,isSend,isAutorised,isGotResFromAdmin}
this.nursesMessages.push(mess)

const existingIndex = this.nMessagePerNurse.findIndex(
  (entry) => entry.nurse.id == nurse.id
);

if (existingIndex !== -1) {
  this.nMessagePerNurse[existingIndex].messages.push(mess);
} else {
  this.nMessagePerNurse.push({
    nurse,
    messages: [mess] 
  });
}
}

showAllMess(){
  return this.nMessagePerNurse;
}

showMessUserStatu(id:string):nMessagePerNurse{
  const existingIndex = this.nMessagePerNurse.findIndex(
    (entry) => entry.nurse.id == id
  );
  return this.nMessagePerNurse[existingIndex]
}

}
