import { Nurse } from '../nurse/nurse.module';
import {Message} from '../message/message.module'

export class nMessagePerNurse{
  nurse:Nurse=new Nurse()
  messages:Message[]=[]
 }