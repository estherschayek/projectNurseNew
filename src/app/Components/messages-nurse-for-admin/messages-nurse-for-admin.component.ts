import { Component } from '@angular/core';
import { NursesService } from '../../Services/nurses.service';
import { SweetAlertService } from '../../Services/sweet-alert.service';
import { Nurse } from '../../Models/nurse/nurse.module';
import { milliseconds } from 'date-fns';
import { nMessagePerNurse } from '../../Models/n-messages-per-nurse/n-messages-per-nurse.module';
import { MessagesService } from '../../Services/messages.service';
import {CommonModule} from '@angular/common'
import { MishmarotesPipe} from "../../Pipes/mishmarotes.pipe";
import { CapitalizeFirstLetterPipePipe } from "../../Pipes/capitalize-first-letter-pipe.pipe";
import { Message } from '../../Models/message/message.module';
import{TablesDirective} from '../../Directives/tables.directive'
import{TableTRDirective} from '../../Directives/table-tr.directive'
import{TableTHDirective} from '../../Directives/table-th.directive'

@Component({
    selector: 'app-messages-nurse-for-admin',
    standalone: true,
    templateUrl: './messages-nurse-for-admin.component.html',
    styleUrl: './messages-nurse-for-admin.component.css',
    imports: [CommonModule, CapitalizeFirstLetterPipePipe, MishmarotesPipe,TablesDirective,TableTRDirective,TableTHDirective]
})
export class MessagesNurseForAdminComponent {

  count:number=0
  messagesPerN:nMessagePerNurse[]=[]
  constructor(private n:NursesService, private sweet:SweetAlertService, private mess:MessagesService){
    this.messagesPerN=this.mess.showAllMess()
  }

autorization(mess:Message) {
this.sweet.autorization(mess)

console.log(mess)
}



}
