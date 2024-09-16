import { Component } from '@angular/core';
import { Nurse } from '../../Models/nurse/nurse.module';
import { NursesService } from '../../Services/nurses.service';
import { NursePersonalMonthlySalaryComponent } from "../nurse-personal-monthly-salary/nurse-personal-monthly-salary.component";
import { NursePersonalCalendarComponent } from "../nurse-personal-calendar/nurse-personal-calendar.component";
import {CommonModule} from '@angular/common'
import { ShowMessStatuComponent } from "../show-mess-statu/show-mess-statu.component";
import { CapitalizeFirstLetterPipePipe } from "../../Pipes/capitalize-first-letter-pipe.pipe";
@Component({
    selector: 'app-nurse-gen',
    standalone: true,
    templateUrl: './nurse-gen.component.html',
    styleUrl: './nurse-gen.component.css',
    imports: [CommonModule, NursePersonalMonthlySalaryComponent, NursePersonalCalendarComponent, ShowMessStatuComponent, CapitalizeFirstLetterPipePipe]
})
export class NurseGenComponent {
  disabledNurseCalendar=false
  disabledMonthlySalary=false
  disabledMessStatu=false
  userActual:Nurse

constructor(private n:NursesService){
 this.userActual=n.currentNurse 
  
}
nursePersoCalendar(){
  this.disabledNurseCalendar=true
  this.disabledMonthlySalary=false
  this.disabledMessStatu=false
}

monthlySalary(){
  this.disabledNurseCalendar=false
  this.disabledMonthlySalary=true
  this.disabledMessStatu=false
}

messStatu(){
  this.disabledNurseCalendar=false
  this.disabledMonthlySalary=false
  this.disabledMessStatu=true
}
}
