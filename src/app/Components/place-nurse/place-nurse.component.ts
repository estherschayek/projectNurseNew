import { Component, OnInit } from '@angular/core';
import { SweetAlertService } from '../../Services/sweet-alert.service';
import { NursesByDepartementService } from '../../Services/nurses-by-departement.service';
import { CommonModule } from '@angular/common';
import { NurseByDepart } from '../../Models/nurse-by-depart/nurse-by-depart.module';
import { MishmarotesPipe } from "../../Pipes/mishmarotes.pipe";
import { CapitalizeFirstLetterPipePipe } from "../../Pipes/capitalize-first-letter-pipe.pipe";
import{ButtonsStyleDirective} from '../../Directives/buttons-style.directive'
import{TablesDirective} from '../../Directives/tables.directive'
import{TableTRDirective} from '../../Directives/table-tr.directive'
import{TableTHDirective} from '../../Directives/table-th.directive'

@Component({
    selector: 'app-place-nurse',
    standalone: true,
    templateUrl: './place-nurse.component.html',
    styleUrl: './place-nurse.component.css',
    imports: [CommonModule, MishmarotesPipe, CapitalizeFirstLetterPipePipe,ButtonsStyleDirective,TablesDirective,TableTRDirective,TableTHDirective]
})
export class PlaceNurseComponent  {

showAllNByDAllDate:NurseByDepart[]=this.nToDep.showNursePerDepartementAllDate();
  constructor(private sweet:SweetAlertService, private nToDep:NursesByDepartementService){}


placeNursePerMonth() {
  const txt="Place nurses"
 this.sweet.popForm2((year, month) => {
  this.nToDep.adminChiboutsPerMonth(month, year);
 ;
},txt)
}



}
