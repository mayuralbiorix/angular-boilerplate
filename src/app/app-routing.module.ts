import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoggedInAuthGuard } from './shared/guards/logged-in-auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>  import('./pages/main-app-container/main-app-container.module').then(
      (m) => m.MainAppContainerModule
    ),
    canActivate: [AuthGuard],
      
  },
    {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then((m) => m.AuthModule),
    data: { title: 'Login' },
    canActivate: [LoggedInAuthGuard],
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
