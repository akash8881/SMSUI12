import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestingComponent } from './testing/testing.component';
import { PersonalDetailsComponent } from './B-tech/personal-details/personal-details.component';
import { HeaderComponent } from './header/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LateralPersonalDetailsComponent } from './B-tech-lateral/lateral-personal-details/lateral-personal-details.component';

const routes: Routes = [

  
  {
    path: 'dashboard',
    component: DashboardComponent
    
  },

  {
    path: 'Personal-Details',
    component: PersonalDetailsComponent
    
  },
  {
    path: 'header',
    component: HeaderComponent
    
  },
  {
    path:'lateral-personal-details',
    component:LateralPersonalDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports :[RouterModule]
   
 })
 export class AppRoutingModule { }
