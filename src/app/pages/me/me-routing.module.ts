import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeComponent } from './me.component';
import { LeaveComponent } from './components/leave/leave.component';
import { RoleGuard } from 'src/app/shared/guards/role.guard';

const routes: Routes = [

  {
    path: '',
    component: MeComponent,
    children: [
      { path: '', redirectTo: 'leave', pathMatch: 'full' },
      {
        path: 'leave',
        component: LeaveComponent
      },

      {
        path: 'employee-leaves',
        component: LeaveComponent,
        data: {
          allowedRoles: ['admin']
        },
        canActivate: [RoleGuard],
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeRoutingModule { }
