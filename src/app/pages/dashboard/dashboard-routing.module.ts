import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { RoleGuard } from 'src/app/shared/guards/role.guard';
import { EmployeeComponent } from './components/employee/employee.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    data: {
      roleRoutes: [
        { role: 'admin', route: '/dashboard/admin' },
        { role: 'employee', route: '/dashboard/employee' },
      ],
    },
    canActivate: [RoleGuard],
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    data: { allowedRoles: ['admin'] },
    canActivate: [RoleGuard],
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    data: { allowedRoles: ['employee'] },
    canActivate: [RoleGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
