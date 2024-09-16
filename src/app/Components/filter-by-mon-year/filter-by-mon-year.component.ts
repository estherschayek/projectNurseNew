import { Component } from '@angular/core';
import { SweetAlertService } from '../../Services/sweet-alert.service';
import { NursesByDepartementService } from '../../Services/nurses-by-departement.service';
import { CommonModule } from '@angular/common';
import { NurseByDepart } from '../../Models/nurse-by-depart/nurse-by-depart.module';
import{ButtonsStyleDirective} from '../../Directives/buttons-style.directive'
import{TablesDirective} from '../../Directives/tables.directive'
import{TableTRDirective} from '../../Directives/table-tr.directive'
import{TableTHDirective} from '../../Directives/table-th.directive'
import { CapitalizeFirstLetterPipePipe } from "../../Pipes/capitalize-first-letter-pipe.pipe";
import { MishmarotesPipe } from "../../Pipes/mishmarotes.pipe";
import { MonthInStringPipe } from "../../Pipes/month-in-string.pipe";

@Component({
    selector: 'app-filter-by-mon-year',
    standalone: true,
    templateUrl: './filter-by-mon-year.component.html',
    styleUrl: './filter-by-mon-year.component.css',
    imports: [CommonModule, ButtonsStyleDirective, TablesDirective, TableTRDirective, TableTHDirective, CapitalizeFirstLetterPipePipe, MishmarotesPipe, MonthInStringPipe]
})
export class FilterByMonYearComponent {
   month:number=0
  year:number=0
  // nursePerMonY:NurseByDepart[]=this.nToDep.showallPerMonthYear(this.month, this.year)

  nursePerMonY: any[] = []
  constructor(private sweet:SweetAlertService, private nToDep:NursesByDepartementService){}

  filterMonY() {
 const txt="Filter nurses by moth and year"
 const date=new Date();
 this.sweet.popForm2((year, month) => {
 this.nursePerMonY=this.nToDep.showallPerMonthYear(month, year);
 this.month=month;
 this.year=year;
 if(this.nursePerMonY.length==0 && month< date.getMonth()+1 && year==date.getFullYear()){
  this.sweet.showErrorAlert("Sorry! But you can't actually access the calendar of the past months. ")
  }
 
 else if(this.nursePerMonY.length==0)
  {
    this.sweet.showErrorAlert("Sorry! The calendar is not yet done for that month. ")
  }
 console.log("the array filtered",this.nToDep.showallPerMonthYear(month, year))
  ;
},txt)


}


}
