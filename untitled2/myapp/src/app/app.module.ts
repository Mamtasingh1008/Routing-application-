import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';


@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    EmployeeComponent
  ],
  imports:  [
    BrowserModule,
   RouterModule.forRoot([
     {path: 'department',component:DepartmentComponent},
     {path: 'employee',component: EmployeeComponent}
     ])

  ],
  providers: [DepartmentComponent, EmployeeComponent],
 /* declarations: [AppComponent,DepartmentComponent, EmployeeComponent],*/
  bootstrap: [AppComponent]
})
export class AppModule { }
