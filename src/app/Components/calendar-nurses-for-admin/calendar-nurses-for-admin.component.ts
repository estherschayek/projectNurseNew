import { Component } from '@angular/core';
import { PlaceNurseComponent } from "../place-nurse/place-nurse.component";
import { FilterByMonYearComponent } from "../filter-by-mon-year/filter-by-mon-year.component";
import { FilterByDepMonYearComponent } from "../filter-by-dep-mon-year/filter-by-dep-mon-year.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-calendar-nurses-for-admin',
    standalone: true,
    templateUrl: './calendar-nurses-for-admin.component.html',
    styleUrl: './calendar-nurses-for-admin.component.css',
    imports: [CommonModule,PlaceNurseComponent, FilterByMonYearComponent, FilterByDepMonYearComponent]
})
export class CalendarNursesForAdminComponent {

    disabledPlacementNurse=false
    disabledFilterMYD=false
    disabledFilterMY=false
   

    place(){
        this.disabledPlacementNurse=true
        this.disabledFilterMYD=false
        this.disabledFilterMY=false
        
      }
    
     fMYD(){
        this.disabledPlacementNurse=false
        this.disabledFilterMYD=true
        this.disabledFilterMY=false
        
      }
    
      fMY(){
        this.disabledPlacementNurse=false
        this.disabledFilterMYD=false
        this.disabledFilterMY=true
        
      }
    
  
}
