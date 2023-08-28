import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { LayoutContainerComponent } from './components/layout-container/layout-container.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


// material imports
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';

// directives 
import { NavAutoCloseDirective } from './directives/auto-close.directive';
import { MenuItemComponent } from './components/menu-item/menu-item.component';



@NgModule({
  declarations: [
    LayoutContainerComponent,
    HeaderComponent,
    FooterComponent,
    NavAutoCloseDirective,
    MenuItemComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatMenuModule,
  ],
  exports: [
    LayoutContainerComponent,
    HeaderComponent,
    FooterComponent,
    MenuItemComponent,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NavAutoCloseDirective,
    MatDividerModule,
    MatMenuModule,
  ],
})
export class SharedModule { }
