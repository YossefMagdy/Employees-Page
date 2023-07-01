import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployePageComponent } from './components/employe-page/employe-page.component';
import { EmployeListComponent } from './components/employe-list/employe-list.component';
import { ControlComponent } from './components/control/control.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FilterPipe } from './Core/pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatusFilterPipe } from './Core/pipes/status-filter.pipe';
import { TypeFilterPipe } from './Core/pipes/type-filter.pipe';
import { SearchByNamePipe } from './Core/pipes/search-by-name.pipe';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

@NgModule({
  declarations: [
    AppComponent,
    EmployePageComponent,
    EmployeListComponent,
    ControlComponent,
    FilterPipe,
    StatusFilterPipe,
    TypeFilterPipe,
    SearchByNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
