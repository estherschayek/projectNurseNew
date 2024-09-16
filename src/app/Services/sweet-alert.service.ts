import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { NursesService } from './nurses.service';
import { ValidationFunService } from './validation-fun.service';
import { NursesByDepartementService } from './nurses-by-departement.service';
import { log } from 'console';
import { DepartementsService } from './departements.service';
import { Nurse } from '../Models/nurse/nurse.module';
import { MessagesService } from './messages.service';
import { Message } from '../Models/message/message.module';



@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor(private n:NursesService, private valid:ValidationFunService, private nToDep:NursesByDepartementService, private dep:DepartementsService, private mess:MessagesService) { }

  showSuccessAlert(name:string, tex:string) {
    Swal.fire({title: name , 
    text: `${tex}`,
    icon: "success",
    confirmButtonColor:"#F3DBC3",
    });
  }

  showErrorAlert(mess:string) {
    Swal.fire({title:'Error',
    text: `${mess}`, 
    icon:'error',
    confirmButtonColor:"#0f5506",
    });
  }

  popForm(i:number, n:string,l:string ,fn:string,s:string, v:number) {
    const first = n[0].toUpperCase() + n.slice(1)
    const last = l[0].toUpperCase() + l.slice(1)
    Swal.fire({
      title: `Updating details of ${last} ${first}`,
      html: `
        <input id="phone" class="swal2-input" placeholder="${fn}">
        <input id="vetek" type="number" class="swal2-input" placeholder="${v}">

        <select selected="${s}" id="selectStatu" class="swal2-select">
          <option value="bahir">bahir</option>
          <option value="basic">basic</option>
        </select>
      `,
      showCancelButton: true,
      confirmButtonColor:"#F3DBC3",
      cancelButtonColor:"#0f5506",
      confirmButtonText: 'Change nurse details!',
      focusConfirm: true,
      preConfirm: () => {
        return {
          phone: (<HTMLInputElement>document.getElementById('phone')).value,
          vetek: (<HTMLInputElement>document.getElementById('vetek')).value,
          statu: (<HTMLInputElement>document.getElementById('selectStatu')).value,
        };
      }
    }).then((result: any) => {
      if (result.isConfirmed) {
        const updatedPhone = result.value.phone;
        const updatedVetek = result.value.vetek;
        const updatedStatu = result.value.statu; 

        if(this.valid.isValidPhone(updatedPhone) && this.valid.isValidNum(updatedVetek))
          {this.n.updateNurseInfo(i,updatedPhone,updatedStatu,updatedVetek)
            this.showSuccessAlert(`${l} ${n}'s personnal details`, "were updated succesfully!")
          } 
        else if(!this.valid.isValidPhone(updatedPhone) || !this.valid.isValidNum(updatedVetek))
        {
          const mess="You have introduce invalids values"
          this.showErrorAlert(mess)
          console.log("you can't update with these values")
        }
      }
     
    });
  }

  popForm2(callback: (year: number, month: number, nurseId?:string) => void, txt:string) {
    const today = new Date();
    const currentMonth=today.getMonth() + 1
    const currentYear=today.getFullYear()
    let selectedYear: number | null = null;
   
    Swal.fire({
      
      title: txt,
      html: `
          <label for="selectYear">Choose a year:</label>
          <select id="selectYear" class="swal2-select">
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        
       
          <label for="selectMonth">Choose a month:</label>
        <select id="selectMonth" class="swal2-select">
        ${this.generateMonthOptions()}
        </select>
      `,
      showCancelButton: true,
      confirmButtonColor:"#F3DBC3",
      cancelButtonColor:"#0f5506",
      confirmButtonText: txt ,
      focusConfirm: true,
      preConfirm: () => {
        const selectedYearElement = <HTMLSelectElement>document.getElementById('selectYear');
        selectedYear = selectedYearElement ? Number(selectedYearElement.value) : null;
        console.log("selectedYear", selectedYear); // Log the selected year
        
        const selectedMonthElement = <HTMLSelectElement>document.getElementById('selectMonth');
        const selectedMonth = selectedMonthElement ? Number(selectedMonthElement.value) : null;
        console.log("selectedMonth", selectedMonth); 
        
        if (txt=="Place nurses"&&selectedYear && (selectedYear < currentYear || (selectedYear === currentYear && selectedMonth && selectedMonth < currentMonth))) {
          Swal.showValidationMessage('Please select a valid year and month.');
          return false;
        }
        
        return {
          year: selectedYear,
          month: (<HTMLInputElement>document.getElementById('selectMonth')).value,
         
        };
      }
    }).then((result: any) => {
      if (result.isConfirmed) {
        const placeYear = result.value.year;
        const placeMonth = result.value.month;
      if (txt === "Personal monthly calendar" || txt==="Monthly salary") {
        const placeNurse = ''; 
        callback(placeYear, placeMonth, placeNurse);
      }
      else{
      callback(placeYear, placeMonth);
      }
      
      }
    });
  }

  generateMonthOptions(): string {
    let monthOptions = '';
    for (let i = 1; i <= 12; i++) {
      monthOptions += `<option value="${i}">${i}</option>`;
    }
    return monthOptions;
  }

  popForm3(callback: (year: number, month: number, dep:string) => void, txt:string) {
    const departmentOptions = this.dep.departements.map(department => `<option value="${department.name}">${department.name}</option>`).join('');
    
    let monthOptions = '';
    for (let i = 1; i <= 12; i++) {
      monthOptions += `<option value="${i}">${i}</option>`;
    }

    Swal.fire({
      title: txt,
      html: `
          <label for="selectYear">Choose a year:</label>
          <select selected="2024" id="selectYear" class="swal2-select">
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        
          <label for="selectMonth">Choose a month:</label>
        <select id="selectMonth" class="swal2-select">
           ${monthOptions}
        </select>

        <label for="selectDep">Choose a departement:</label>
        <select id="selectDep" class="swal2-select">
        ${departmentOptions}
        </select>
      `,
      showCancelButton: true,
      confirmButtonColor:"#F3DBC3",
      cancelButtonColor:"#0f5506",
      confirmButtonText: txt ,
      focusConfirm: true,
      preConfirm: () => {
        return {
          year: (<HTMLInputElement>document.getElementById('selectYear')).value,
          month: (<HTMLInputElement>document.getElementById('selectMonth')).value,
          dep:(<HTMLInputElement>document.getElementById('selectDep')).value,
        };
      }
    }).then((result: any) => {
      if (result.isConfirmed) {
        const placeYear = result.value.year;
        const placeMonth = result.value.month;
        const placeDep=result.value.dep;
      
        callback(placeYear, placeMonth,placeDep);
       
      }
     
    });
  }


  popFormSendMessage(nurse:Nurse, dateMess:Date,dateDes:Date ,dep:string,mish:string) {
    
    const formattedDateMess = this.formatDate(dateMess);
    const formattedDateDes = this.formatDate(dateDes);
    Swal.fire({
      title: `${nurse.fName}\n's message`,
      html: `
      <label for="idNurse">Nurse Id:</label>
        <input id="idNurse" class="swal2-input" placeholder="${nurse.id}" value="${nurse.id}" disabled>
        <label for="dateM">The date the message is sent:</label>
        <input id="dateM" type="text" class="swal2-input" placeholder="${formattedDateMess}" value="${dateMess}"disabled>
        <label for="dateD">The date you are going to miss:</label>
        <input id="dateD" class="swal2-input" placeholder="${formattedDateDes}" value="${dateDes}"disabled>
        <label for="dep">The departement you work on that day:</label>
        <input id="dep" type="text" class="swal2-input" placeholder="${dep}" value="${dep}"disabled>
        <label for="mish">The mishmerete you work on that day:</label>
        <input id="mish" type="text" class="swal2-input" placeholder="${mish}" value="${mish}"disabled>
        </select>

        <label for="selectrai">Choose a raison for missing:</label>
        <select id="rai" class="swal2-select">
            <option value="Sikness">Sikness</option>
            <option value="Happy occasion">Happy occasion</option>
            <option value="Child Sick">Child Sick</option>
            <option value="Vacation">Vacation</option>
            <option value="Just to have a break!!">Just to have a break!!</option>
        </select>
      `,
      showCancelButton: true,
      confirmButtonColor:"#F3DBC3",
      cancelButtonColor:"#0f5506",
      confirmButtonText: 'Send missing message',
      focusConfirm: true,
      preConfirm: () => {
        return {
         
          dateM: (<HTMLInputElement>document.getElementById('dateM')).value,
          dateD: (<HTMLInputElement>document.getElementById('dateD')).value,
          dep: (<HTMLInputElement>document.getElementById('dep')).value,
          mish: (<HTMLInputElement>document.getElementById('mish')).value,
          raison: (<HTMLInputElement>document.getElementById('rai')).value,
        };
      }
    }).then((result: any) => {
      if (result.isConfirmed) {
        const dateM = result.value.dateM;
        const dateD = result.value.dateD;
        const dep = result.value.dep;
        const mish = result.value.mish;
        const raison = result.value.raison;  
       
        this.mess.addMess(nurse,dateM,dateD,dep,mish,raison)
      
      }
     
    });
  }

  formatDate(date: Date): string {
    
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}
autorization(mess:Message){
  const existingIndex = this.mess.nMessagePerNurse.findIndex(
    (entry) => entry.nurse.id == mess.nurse.id
  );
 
   const existingmess=this.mess.nMessagePerNurse[existingIndex].messages.findIndex(
    (m) => m.dateMessSend == mess.dateMessSend && m.dateDestination ==mess.dateDestination && m.depInDateDes==mess.depInDateDes
   )


  console.log("all the messages of all the nurses",this.mess.nMessagePerNurse);
  console.log("all the messages of THIs nurse",this.mess.nMessagePerNurse[existingIndex]);
  console.log("JUST the MESSAGES of THIS nurse",this.mess.nMessagePerNurse[existingIndex].messages);
  console.log("JUST  this speciphique MESS to which we give auto",this.mess.nMessagePerNurse[existingIndex].messages[existingmess]);

  Swal.fire({
    title: `Autorization missing for ${mess.nurse.fName} on ${mess.dateDestination}`,
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonColor:"#F3DBC3",
    cancelButtonColor:"brown",
    denyButtonColor:"#0f5506",
    confirmButtonText: "Autorize",
    denyButtonText: `Don't autorize`
  }).then((result) => {

    if (result.isConfirmed) {
      if(existingmess !== undefined && existingmess !== null){  
        console.log("the index of the message",existingmess)
        this.mess.nMessagePerNurse[existingIndex].messages[existingmess].isGotResFromAdmin=true
        this.mess.nMessagePerNurse[existingIndex].messages[existingmess].isAutorised=true
        this.mess.nMessagePerNurse[existingIndex].messages[existingmess].isSend=true
       
        Swal.fire("Autorisation send suxcesfully! Be aware to find a remplacement for that day", "", "success");
      }
    
    } else if (result.isDenied) {

      if(existingmess !== undefined && existingmess !== null){
      this.mess.nMessagePerNurse[existingIndex].messages[existingmess].isGotResFromAdmin=true
      this.mess.nMessagePerNurse[existingIndex].messages[existingmess].isAutorised=false
      this.mess.nMessagePerNurse[existingIndex].messages[existingmess].isSend=true
     
      Swal.fire("you didn't autorize missing", "", "info");
      }
    
    }
  });
}
}
