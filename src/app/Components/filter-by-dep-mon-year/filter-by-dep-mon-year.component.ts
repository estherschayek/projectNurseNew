import { Component } from '@angular/core';
import { SweetAlertService } from '../../Services/sweet-alert.service';
import { NursesByDepartementService } from '../../Services/nurses-by-departement.service';
import { CommonModule } from '@angular/common';
import{ButtonsStyleDirective} from '../../Directives/buttons-style.directive'
import{TablesDirective} from '../../Directives/tables.directive'
import{TableTRDirective} from '../../Directives/table-tr.directive'
import{TableTHDirective} from '../../Directives/table-th.directive'
import { CapitalizeFirstLetterPipePipe } from "../../Pipes/capitalize-first-letter-pipe.pipe";
import { MishmarotesPipe } from "../../Pipes/mishmarotes.pipe";

@Component({
    selector: 'app-filter-by-dep-mon-year',
    standalone: true,
    templateUrl: './filter-by-dep-mon-year.component.html',
    styleUrl: './filter-by-dep-mon-year.component.css',
    imports: [CommonModule, ButtonsStyleDirective, TablesDirective, TableTRDirective, TableTHDirective, CapitalizeFirstLetterPipePipe, MishmarotesPipe]
})
export class FilterByDepMonYearComponent {
month:Number=0
year:Number=0
dep=""

  nursePerMonYDep: any[] = []
constructor(private sweet:SweetAlertService, private nToDep:NursesByDepartementService){

}


filterMonYDep() {
  const txt="Filter nurses by departement"
  const date=new Date()
  this.sweet.popForm3((year, month,dep) => {
  this.nursePerMonYDep=this.nToDep.showNursePerDepartAndMonthYear(month, year,dep);
  this.dep=dep;
  this.year=year;
  this.month=month;
  if(this.nursePerMonYDep.length==0 && month< date.getMonth()+1 && year==date.getFullYear()){
    this.sweet.showErrorAlert("Sorry! But you can't actually access the calendar of the past months. ")
    }
   
   else if(this.nursePerMonYDep.length==0)
    {
      this.sweet.showErrorAlert("Sorry! The calendar is not yet done for that month. ")
    }
  console.log("the array filtered",this.nToDep.showNursePerDepartAndMonthYear(month, year,dep))
   ;
 },txt)
 
 }


}
