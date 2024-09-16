import { Component } from '@angular/core';
import { MessagesService } from '../../Services/messages.service';
import { nMessagePerNurse } from '../../Models/n-messages-per-nurse/n-messages-per-nurse.module';
import { NursesService } from '../../Services/nurses.service';
import {CommonModule} from '@angular/common'
import { Nurse } from '../../Models/nurse/nurse.module';
import { CapitalizeFirstLetterPipePipe } from "../../Pipes/capitalize-first-letter-pipe.pipe";
import { MishmarotesPipe } from "../../Pipes/mishmarotes.pipe";
import{TablesDirective} from '../../Directives/tables.directive'
import{TableTRDirective} from '../../Directives/table-tr.directive'
import{TableTHDirective} from '../../Directives/table-th.directive'

@Component({
    selector: 'app-show-mess-statu',
    standalone: true,
    templateUrl: './show-mess-statu.component.html',
    styleUrl: './show-mess-statu.component.css',
    imports: [CommonModule, CapitalizeFirstLetterPipePipe, MishmarotesPipe,TablesDirective,TableTRDirective,TableTHDirective]
})
export class ShowMessStatuComponent {
 actualNurse:Nurse=new Nurse()
  messCurentNurse:any
  constructor(private mess:MessagesService, private nurse:NursesService){
    this.actualNurse=nurse.currentNurse
    this.messCurentNurse=this.mess.showMessUserStatu(this.actualNurse.id)
    console.log(this.messCurentNurse)
  }

}
