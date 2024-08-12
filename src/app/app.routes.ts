import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SubmittedInfoComponent } from './submitted-info/submitted-info.component';

export const routes: Routes = [
  { path: '', component: LoginComponentComponent },
  { path: 'submitted-data', component: SubmittedInfoComponent }
];


export class AppRoutingModule { }
