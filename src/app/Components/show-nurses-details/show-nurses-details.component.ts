import { Component } from '@angular/core';
import { NursesService } from '../../Services/nurses.service';
import { CommonModule } from '@angular/common';
import { SweetAlertService } from '../../Services/sweet-alert.service';
import { NursesByDepartementService } from '../../Services/nurses-by-departement.service';
import { CapitalizeFirstLetterPipePipe } from "../../Pipes/capitalize-first-letter-pipe.pipe";
import{TablesDirective} from '../../Directives/tables.directive'
import{TableTRDirective} from '../../Directives/table-tr.directive'
import{TableTHDirective} from '../../Directives/table-th.directive'
@Component({
    selector: 'app-show-nurses-details',
    standalone: true,
    templateUrl: './show-nurses-details.component.html',
    styleUrl: './show-nurses-details.component.css',
    imports: [CommonModule, CapitalizeFirstLetterPipePipe,TablesDirective,TableTRDirective,TableTHDirective]
})
export class ShowNursesDetailsComponent {


 constructor(private sNurse:NursesService, private sweet:SweetAlertService, private nToDep:NursesByDepartementService){}

 nurseArr=this.sNurse.getAllNurse()

 delete(id: string) {
  let nursePlacedInCalendar=this.nToDep.nurseToDepart.find(n=>n.nurseId.id==id)
  if(nursePlacedInCalendar)
    {
      this.sweet.showErrorAlert("You can't delete this nurse. The nurse is placed in the calendar")
    }
  else{
      this.sNurse?.deleteNurse(id)
      this.sweet.showSuccessAlert(`Nurse with id: ${id}`, "was deleted succesfully!")
    }
  
  }

 update(i:number,n:string,l:string ,fn:string,s:string, v:number) {
    this.sweet.popForm(i,n,l,fn,s,v)
    var o=this.sweet.popForm(i,n,l,fn,s,v)
    
    
}
}