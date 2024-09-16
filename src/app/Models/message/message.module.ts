
import { Nurse } from '../nurse/nurse.module';

export class Message{
  nurse:Nurse= new Nurse()
  dateMessSend:Date= new Date()
  dateDestination:Date=new Date()
  depInDateDes:string=""
  mishmeretDateDes:string=""
  raison:string=""
  isSend:boolean=false
  isAutorised:boolean=false
  isGotResFromAdmin:boolean=false
 }
