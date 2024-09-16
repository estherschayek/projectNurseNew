import { Injectable } from '@angular/core';
import { NurseByDepart } from '../Models/nurse-by-depart/nurse-by-depart.module';
import {NursesService } from '../Services/nurses.service'
import{DepartementsService} from '../Services/departements.service'
import { Departement } from '../Models/departement/departement.module';
import { Nurse } from '../Models/nurse/nurse.module';

@Injectable({
  providedIn: 'root'
})

export class NursesByDepartementService {

nurseToDepart:NurseByDepart[]=[]

  constructor(private nurseService:NursesService, private departService:DepartementsService) {}

  getDaysInMonth(month:number, year:number):Date[] {
    console.log("month" , month); // 3
    
    var date = new Date(year, month-1, 1);
    console.log(date);
    console.log(date.getMonth()); // 2
    
    var days = [];
    while (date.getMonth() === month-1) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    console.log("days:", days)
    return days; 
  }

  assignNurseToShift(date: Date, department: Departement, nurse:Nurse , shift: string): void {
    this.nurseToDepart.push({
        nurseId: nurse,
        departId: department,
        mishmeret: shift,
        date: date
    });
}

  adminChiboutsPerMonth(m:number,y:number):void{
    var days= this.getDaysInMonth(m,y)
    var dep=this.departService.departements
    var count=0;
    var halfIndex = 0;
    console.log("the num of nurses:",this.nurseService.nurses.length)
    if(days.length%2==0)
    {
      halfIndex = days.length / 2;
    }
    else{
      halfIndex = (days.length / 2) +1;
    }
    for(var i=0;i<days.length;i++)
    { 
      
       count = i < halfIndex ? 0 : this.nurseService.nurses.length -1;
      if(count==0)
        {
              console.log("the count when START each day:",count)
          dep.forEach(departement=>{
        
          
            for(var a=0;a<departement.nurseDay &&count<this.nurseService.nurses.length;a++)
            {
             this.assignNurseToShift(days[i], departement, this.nurseService.nurses[count], 'a');
             count +=1;
           
            }
            for(var b=0;b<departement.nurseAfterNoon&&count<this.nurseService.nurses.length;b++)
            {
             this.assignNurseToShift(days[i], departement, this.nurseService.nurses[count], 'b');
             count +=1;
            
            }
  
          for(var c=0;c<departement.nurseNight&&count<this.nurseService.nurses.length;c++)
            {
             this.assignNurseToShift(days[i], departement, this.nurseService.nurses[count], 'c');
             count += 1;
             
            }
          })}

      else{
        dep.forEach(departement=>{
          for(var b=0;b<departement.nurseDay &&count<this.nurseService.nurses.length && count>=0;b++)
          {
           this.assignNurseToShift(days[i], departement, this.nurseService.nurses[count], 'b');
           count += -1;
         
          }
          for(var a=0;a<departement.nurseAfterNoon&&count<this.nurseService.nurses.length && count>=0;a++)
          {
           this.assignNurseToShift(days[i], departement, this.nurseService.nurses[count], 'a');
           count += -1;
          
          }

        for(var c=0;c<departement.nurseNight&&count<this.nurseService.nurses.length && count>=0;c++)
          {
           this.assignNurseToShift(days[i], departement, this.nurseService.nurses[count], 'c');
           count +=-1;
           
          }
          })}
         
        console.log("the count when finishing each depart:",count)
           
    }
      
            
  }


showallPerMonthYear(month:number, year:number){
  const allMonthND=this.nurseToDepart.filter(n=>n.date.getFullYear()==year
  &&n.date.getMonth()==month-1)
  console.log("the month",month)
  console.log("the get month",this.nurseToDepart[0].date.getMonth())
   return allMonthND;
}

showNursePerDepartAndMonthYear(month:number,year:number,depart:string){
 
  const nurseToDepartAtMonth=this.nurseToDepart.filter(n=>n.date.getMonth()==month-1
  && n.date.getFullYear()==year 
  && n.departId.name==depart) 
  return nurseToDepartAtMonth;
}

showNursePerDepartementAllDate(){
  return this.nurseToDepart;
}

showCalendarOfOneNursePerMonthYear(month:number,year:number,id:string){
  const oneNurseCalendarMY=this.nurseToDepart.filter(n=>n.date.getMonth()==month-1
  &&n.date.getFullYear()==year&& n.nurseId.id==id)
  return oneNurseCalendarMY;
}

calculatingMonthlySalary(month:number,year:number,id:string){
  const daysOfWorks=this.showCalendarOfOneNursePerMonthYear(month,year,id).length
  let nurse=this.nurseService.nurses.find(n=>n.id==id)
  let basicSalary=0;
  let vetekSalary=0
  let statuSalary=0
  let hoursWork=0
  if(nurse && daysOfWorks>0){
    hoursWork=daysOfWorks*8.5
    basicSalary=hoursWork*50
     if(nurse.statu=="bahir"){
        statuSalary=5000
        
  }  
     if(nurse.vetek>0){
        vetekSalary= nurse.vetek*(3*(basicSalary+statuSalary)/100)
  }
 
  }
  const totalSalary=basicSalary+ vetekSalary +statuSalary
 return {
  month,
  year,
  hoursWork,
  daysOfWorks,
  basicSalary,
  vetekSalary,
  statuSalary,
  totalSalary,
 }
}

}
