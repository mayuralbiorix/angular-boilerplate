import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { LayoutContainerComponent } from './components/layout-container/layout-container.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


// material imports
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatDividerModule} from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
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
    MatToolbarModule,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatMenuModule

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
    MatToolbarModule,
    NavAutoCloseDirective,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatMenuModule
  ],
})
export class SharedModule { }
