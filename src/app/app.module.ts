import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AccordionModule} from 'primeng/accordion';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import {ButtonModule} from 'primeng/button';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { TestingComponent } from './testing/testing.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonalDetailsComponent } from './B-tech/personal-details/personal-details.component';
import { TableModule } from 'primeng/table';
 import { NgxPaginationModule } from 'ngx-pagination';

import {PaginatorModule} from 'primeng/paginator';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LateralPersonalDetailsComponent } from './B-tech-lateral/lateral-personal-details/lateral-personal-details.component';
import {PasswordModule} from 'primeng/password';
import {SelectButtonModule} from 'primeng/selectbutton';
import {CardModule} from 'primeng/card';
import {SplitterModule} from 'primeng/splitter';
import {TabViewModule} from 'primeng/tabview';
import {DockModule} from 'primeng/dock';
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestingComponent,
    PersonalDetailsComponent,
    DashboardComponent,
    LateralPersonalDetailsComponent
  ],
  imports: [
    BrowserModule,
    SelectButtonModule,
    AccordionModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    AppRoutingModule,
    CalendarModule,
    DropdownModule,
    TableModule,
    PaginatorModule,
    NgxPaginationModule,
    PasswordModule,
    SelectButtonModule,
    CardModule,
    SplitterModule,
    TabViewModule,
    DockModule,
    MultiSelectModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
