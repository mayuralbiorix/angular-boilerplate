import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './dashboard.component';
import { RoleGuard } from 'src/app/shared/guards/role.guard';
import { EmployeeComponent } from './components/employee/employee.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      roleRoutes: [
        { role: 'admin', route: '/dashboard/admin-dashboard' },
        { role: 'employee', route: '/dashboard/employee-dashboard' },
      ],
    },
    canActivate: [RoleGuard],
    children: [
      {
        path: 'admin-dashboard',
        component: AdminDashboardComponent,
      },
      {
        path: 'employee-dashboard',
        component: EmployeeComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
