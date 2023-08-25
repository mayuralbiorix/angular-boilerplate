import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoggedInAuthGuard } from './shared/guards/logged-in-auth.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';

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

  {
    path:'**', component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
