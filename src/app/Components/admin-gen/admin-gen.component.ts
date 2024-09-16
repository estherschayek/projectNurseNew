import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute,Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MessagesNurseForAdminComponent } from '../messages-nurse-for-admin/messages-nurse-for-admin.component';
import { AddNurseComponent } from '../add-nurse/add-nurse.component';
import { CalendarNursesForAdminComponent } from '../calendar-nurses-for-admin/calendar-nurses-for-admin.component';
import { ShowNursesDetailsComponent } from '../show-nurses-details/show-nurses-details.component';
import { PlaceNurseComponent } from "../place-nurse/place-nurse.component";
import { FilterByDepMonYearComponent } from "../filter-by-dep-mon-year/filter-by-dep-mon-year.component";
import { FilterByMonYearComponent } from "../filter-by-mon-year/filter-by-mon-year.component";

@Component({
    selector: 'app-admin-gen',
    standalone: true,
    templateUrl: './admin-gen.component.html',
    styleUrl: './admin-gen.component.css',
    imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet, MessagesNurseForAdminComponent, AddNurseComponent, CalendarNursesForAdminComponent, ShowNursesDetailsComponent, PlaceNurseComponent, FilterByDepMonYearComponent, FilterByMonYearComponent]
})
export class AdminGenComponent {
  disabledAddNurse=false
  disabledshowDetails=false
  // disabledcalendar=false
  disabledmess=false
  disabledPlacementNurse=false
  disabledFilterMYD=false
  disabledFilterMY=false
  constructor(private router:Router, private route:ActivatedRoute){}


  add(){
    this.disabledAddNurse=true
    this.disabledshowDetails=false
    // this.disabledcalendar=false
    this.disabledmess=false
  }

  showDetails(){
    this.disabledAddNurse=false
    this.disabledshowDetails=true
    // this.disabledcalendar=false
    this.disabledmess=false
    this.disabledPlacementNurse=false
    this.disabledFilterMYD=false
    this.disabledFilterMY=false
  }

  // calendar(){
  //   this.disabledAddNurse=false
  //   this.disabledshowDetails=false
  //   this.disabledcalendar=true
  //   this.disabledmess=false
  //   this.disabledPlacementNurse=false
  //   this.disabledFilterMYD=false
  //   this.disabledFilterMY=false
  // }

  mess(){
    this.disabledAddNurse=false
    this.disabledshowDetails=false
    // this.disabledcalendar=false
    this.disabledmess=true
    this.disabledPlacementNurse=false
    this.disabledFilterMYD=false
    this.disabledFilterMY=false
  }

  
  place(){
    this.disabledAddNurse=false
    this.disabledshowDetails=false
    // this.disabledcalendar=false
    this.disabledmess=false
    this.disabledPlacementNurse=true
    this.disabledFilterMYD=false
    this.disabledFilterMY=false
    
  }

 fMYD(){
  this.disabledAddNurse=false
  this.disabledshowDetails=false
  // this.disabledcalendar=false
  this.disabledmess=false
    this.disabledPlacementNurse=false
    this.disabledFilterMYD=true
    this.disabledFilterMY=false
    
  }

  fMY(){
    this.disabledAddNurse=false
    this.disabledshowDetails=false
    // this.disabledcalendar=false
    this.disabledmess=false
    this.disabledPlacementNurse=false
    this.disabledFilterMYD=false
    this.disabledFilterMY=true
    
  }
}
