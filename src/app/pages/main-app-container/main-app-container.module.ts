import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainAppContainerRoutingModule } from './main-app-container-routing.module';
import { MainAppContainerComponent } from './main-app-container.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MainAppContainerComponent
  ],
  imports: [
    CommonModule,
    MainAppContainerRoutingModule,
    SharedModule,
  ]
})
export class MainAppContainerModule { }
