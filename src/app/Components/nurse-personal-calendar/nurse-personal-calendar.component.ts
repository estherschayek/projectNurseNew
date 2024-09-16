import { Component } from '@angular/core';
import { NursesByDepartementService } from '../../Services/nurses-by-departement.service';
import { SweetAlertService } from '../../Services/sweet-alert.service';
import { Nurse } from '../../Models/nurse/nurse.module';
import { NursesService } from '../../Services/nurses.service';
import{CommonModule} from '@angular/common'
import{ButtonsStyleDirective} from '../../Directives/buttons-style.directive'
import{TablesDirective} from '../../Directives/tables.directive'
import{TableTRDirective} from '../../Directives/table-tr.directive'
import{TableTHDirective} from '../../Directives/table-th.directive'
import { CapitalizeFirstLetterPipePipe } from "../../Pipes/capitalize-first-letter-pipe.pipe";
import { MishmarotesPipe } from "../../Pipes/mishmarotes.pipe";

@Component({
    selector: 'app-nurse-personal-calendar',
    standalone: true,
    templateUrl: './nurse-personal-calendar.component.html',
    styleUrl: './nurse-personal-calendar.component.css',
    imports: [CommonModule, TablesDirective, ButtonsStyleDirective, TableTRDirective, TableTHDirective, CapitalizeFirstLetterPipePipe, MishmarotesPipe]
})
export class NursePersonalCalendarComponent {
  date=new Date()
  nursePerCalendarMonY: any[] = []
  actualNurse:Nurse
  constructor(private sweet:SweetAlertService, private nToDep:NursesByDepartementService, private n:NursesService){
    this.actualNurse=this.n.currentNurse;
  }

 persoCalendarMonY() {
 const txt="Personal monthly calendar"
 this.sweet.popForm2((year, month) => {
 this.nursePerCalendarMonY=this.nToDep.showCalendarOfOneNursePerMonthYear(month, year,this.actualNurse?.id);
 console.log("the monthly Calendar:",this.nToDep.showCalendarOfOneNursePerMonthYear(month, year,this.actualNurse?.id))
  ;
},txt)}

 sendMessToAd(n:Nurse,dM:Date,dD:Date,dep:string,mi:string){
  this.sweet.popFormSendMessage(n,dM,dD,dep,mi)
   }

}
