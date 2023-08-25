import { Component, Input } from '@angular/core';
import { SideNavMenu } from '../../models/side-nav-menu';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  // sub menu items in side nav
  @Input() menuItems: SideNavMenu[] = [];

  /**
   * Expand or Collapse the side nav menu.
   * @param menuItem - the menu need to be expand/collapse.
   * @returns 
   */
  expandOrCollapse(menuItem: SideNavMenu): void {
    if (menuItem.link) {
      this.collapseAllNeighbourNav(menuItem);
      return;
    }
    if (menuItem.expanded) {
      this.collapseAllChildNodes(menuItem);
    } else {
      menuItem.expanded = !menuItem.expanded;
      this.collapseAllNeighbourNav(menuItem);
    }

  }
/**
 * Collapse all the neighbhour nav menus of the current selected nav menu.
 * @param menuItem - the menu for which the neighbour need to be collpased.
 */
  private collapseAllNeighbourNav(menuItem: SideNavMenu): void {
    this.menuItems.forEach((menu: any) => {
      if (menu.string !== menuItem.string) {
        this.collapseAllChildNodes(menu);
      }
    });
  }

/**
 * Collapse all child nodes.
 * @param node - the root nav for which the sub children nav should be collapse.
 */
  private collapseAllChildNodes(node: SideNavMenu): void {
    if (node.subItems && node.expanded) {
      node.expanded = false;
      for (let child of node.subItems) {
        this.collapseAllChildNodes(child);
      }
    }
  };
}
