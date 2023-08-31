import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeRoutingModule } from './me-routing.module';
import { MeComponent } from './me.component';
import { LeaveComponent } from './components/leave/leave.component';


@NgModule({
  declarations: [
    MeComponent,
    LeaveComponent
  ],
  imports: [
    CommonModule,
    MeRoutingModule
  ]
})
export class MeModule { }
