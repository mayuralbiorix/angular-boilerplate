import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'admin-dashboard',
        component: AdminDashboardComponent,
      },
      {
        path: 'org-dashboard',
        component: AdminDashboardComponent,
      },
      {
        path: 'test-dashboard',
        component: AdminDashboardComponent,
      },
      {
        path: 'client-dashboard',
        component: AdminDashboardComponent,
      },
      {
        path: 'carer-dashboard',
        component: AdminDashboardComponent,
      },
      {
        path: 'this-dashboard',
        component: AdminDashboardComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
