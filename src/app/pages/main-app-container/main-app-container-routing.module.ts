import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAppContainerComponent } from './main-app-container.component';

const routes: Routes = [
  {
    path: '',
    component: MainAppContainerComponent,
    children:
      [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule) },
        { path: 'duplicate/dashboard', loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule) },
        { path: 'duplicate/dashboard1', loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule) },
        { path: 'duplicate/dashboard2', loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule) },

      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainAppContainerRoutingModule { }
