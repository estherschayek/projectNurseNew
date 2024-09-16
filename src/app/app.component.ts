import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';





@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [BsDatepickerModule,NgbModule, ReactiveFormsModule, CommonModule, RouterOutlet, NavbarComponent]
})
export class AppComponent{
  title = 'nurseProjectEsther';

}
