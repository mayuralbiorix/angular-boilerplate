import { Component, Input } from '@angular/core';
import { SideNavMenu } from '../../models/side-nav-menu';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  // sub menu items in side nav
  @Input() subMenus!: SideNavMenu[];
}
