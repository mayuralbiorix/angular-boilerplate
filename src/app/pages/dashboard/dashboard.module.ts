import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './dashboard.component';
import { EmployeeComponent } from './components/employee/employee.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    DashboardComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
