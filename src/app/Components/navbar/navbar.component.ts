import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NursesService } from '../../Services/nurses.service';
import { Nurse } from '../../Models/nurse/nurse.module';
import {CommonModule} from '@angular/common'
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  actualN:Nurse
  constructor(private n:NursesService){
    this.actualN=n.currentNurse 
  }

}
