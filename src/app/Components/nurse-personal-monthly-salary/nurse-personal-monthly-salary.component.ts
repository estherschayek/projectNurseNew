import { Component } from '@angular/core';
import { Nurse } from '../../Models/nurse/nurse.module';
import { SweetAlertService } from '../../Services/sweet-alert.service';
import { NursesByDepartementService } from '../../Services/nurses-by-departement.service';
import { NursesService } from '../../Services/nurses.service';
import{CommonModule} from '@angular/common'
import { CapitalizeFirstLetterPipePipe } from "../../Pipes/capitalize-first-letter-pipe.pipe";
import { MonthInStringPipe } from "../../Pipes/month-in-string.pipe";
import {ButtonsStyleDirective} from '../../Directives/buttons-style.directive'
@Component({
    selector: 'app-nurse-personal-monthly-salary',
    standalone: true,
    templateUrl: './nurse-personal-monthly-salary.component.html',
    styleUrl: './nurse-personal-monthly-salary.component.css',
    imports: [CommonModule, CapitalizeFirstLetterPipePipe, MonthInStringPipe,ButtonsStyleDirective]
})
export class NursePersonalMonthlySalaryComponent {
  
  actualNurse:Nurse
  payBill: any;
  constructor(private sweet:SweetAlertService, private nToDep:NursesByDepartementService, private n:NursesService){
    this.actualNurse=this.n.currentNurse;
   
  }

  persoSalaryMonthY() {
    const txt="Monthly salary"
   
    this.sweet.popForm2((year, month) => {
    this.payBill= this.actualNurse?.id ? 
    this.nToDep.calculatingMonthlySalary(month, year, this.actualNurse.id) : 
      0;
    console.log("the monthly salary:",this.nToDep.calculatingMonthlySalary(month, year,this.actualNurse?.id))
     ;
   },txt)}

   printContent() {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write('<html><head><title>Print</title>');
      printWindow.document.write('<link rel="stylesheet" href="print.css" type="text/css" media="print">');
      printWindow.document.write('</head><body>');
      printWindow.document.write(document.querySelector('.print-content')?.innerHTML || '');
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.print();
    }
  }
}
