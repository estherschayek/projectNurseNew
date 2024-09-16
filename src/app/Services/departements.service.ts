import { Injectable } from '@angular/core';
import { Departement } from '../Models/departement/departement.module';

@Injectable({
  providedIn: 'root'
})
export class DepartementsService {
departements:Departement[]=[{id:"1",name:"children",nurseDay:4, nurseAfterNoon:3, nurseNight:3 },
{id:"2",name:"surgery",nurseDay:3, nurseAfterNoon:3, nurseNight:2 },
{id:"3",name:"womens",nurseDay:3, nurseAfterNoon:3, nurseNight:3 },
{id:"4",name:"ICU",nurseDay:3, nurseAfterNoon:3, nurseNight:3 },
{id:"5",name:"cardiology",nurseDay:3, nurseAfterNoon:3, nurseNight:3 },
{id:"6",name:"maternity",nurseDay:3, nurseAfterNoon:3, nurseNight:3 },
{id:"7",name:"internal",nurseDay:3, nurseAfterNoon:3, nurseNight:3 },
{id:"8",name:"sort",nurseDay:3, nurseAfterNoon:3, nurseNight:3 }
];
  constructor() {
     
   }

  getDepartements():Departement[]{
    return this.departements
  }



}
