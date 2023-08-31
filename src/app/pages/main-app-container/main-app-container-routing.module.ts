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
        { path: 'me', loadChildren: () => import('../me/me.module').then((m) => m.MeModule) }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainAppContainerRoutingModule { }
