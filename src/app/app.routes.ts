import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { AdminGenComponent } from './Components/admin-gen/admin-gen.component';
import { NurseGenComponent } from './Components/nurse-gen/nurse-gen.component';
import { CalendarNursesForAdminComponent } from './Components/calendar-nurses-for-admin/calendar-nurses-for-admin.component';
import { AddNurseComponent } from './Components/add-nurse/add-nurse.component';
import { ShowNursesDetailsComponent } from './Components/show-nurses-details/show-nurses-details.component';
import { MessagesNurseForAdminComponent } from './Components/messages-nurse-for-admin/messages-nurse-for-admin.component';

export const routes: Routes = [{path:'home', component:HomeComponent},
{path:'login', component:LoginComponent},
{path:'adminGen', component:AdminGenComponent},
{path:'nurseGen/:userId', component:NurseGenComponent},
{path:'calendar', component:CalendarNursesForAdminComponent},
{path:'addNurse', component:AddNurseComponent},
{path:'showNDetails', component:ShowNursesDetailsComponent},
{path:'message', component:MessagesNurseForAdminComponent},
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: '**', redirectTo: '/admin' }];
