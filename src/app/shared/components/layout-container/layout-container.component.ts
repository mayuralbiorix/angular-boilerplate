import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { Subject, takeUntil } from 'rxjs';
import { default as menuItemsByRole } from './menu-items.json';
import { AuthService } from '../../services/auth.service';
import { MatMenuTrigger } from '@angular/material/menu';
import { NavigationEnd, Router } from '@angular/router';

type SideNavMenuItems =
  {
    string: string;
    icon: string;
    link: string;
    selected?: boolean;
    expanded?: boolean;
    subItems?: SideNavMenuItems[];
  };

@Component({
  selector: 'app-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.scss'],
})
export class LayoutContainerComponent implements OnInit {
  navExpanded!: boolean; // state of our left hand menu

  // subject for onDestroy, used to unsubscribe from subscriptions when the component is destroyed
  onDestroySubject = new Subject<void>();

  // Store user login status.
  isUserLoggedIn!: boolean;

  // items to be displayed in the left hand menu
  roleBasedMenuItems: SideNavMenuItems[] = [];

  constructor(
    private navigationService: NavigationService,
    private auth: AuthService,
    private router: Router) {

    this.navigationService
      .isNavExpanded()
      .pipe(takeUntil(this.onDestroySubject))
      .subscribe((navExpanded) => {
        this.navExpanded = navExpanded;
      });
  }

  ngOnInit(): void {
    this.getMenuItems();
    this.isUserLoggedIn = this.auth.isUserLoggedIn();
    this.watchForRouteChanges();
  }

  /**
   * Get side navigation menu items based on the user role
   */
  private getMenuItems() {
    this.roleBasedMenuItems = menuItemsByRole['admin'];
  }

  toggleMenu(menuTrigger: MatMenuTrigger, open: boolean) {
    if (open) { menuTrigger.openMenu(); return; }
    menuTrigger.closeMenu();
  }

  /**
     * Watch for route changes and update the "selected" status of menu items
     * by comparing the menu item's route to the current route.
     *
     *
     */
  watchForRouteChanges(): void {
    this.router.events.pipe(takeUntil(this.onDestroySubject)).subscribe((routerEvent) => {
      // Some functions only need to be called on navigation end (when route change is completed)
      if (routerEvent instanceof NavigationEnd) {
        this.updateMenuItemHighlight();
      }
    });
  }

  /**
     * Adds the "selected" class to the item on the menu that matches the current route.
     */
  updateMenuItemHighlight(): void {
    // loop through the items and set them all to unselected, unless they are the currently active item

    const firstRouteElement = this.router.url;

    this.roleBasedMenuItems.forEach((item) => {
      item['selected'] = false;
      const firstItemLinkElement = item.link;
      if (
        firstRouteElement === firstItemLinkElement
        || (firstRouteElement === 'conversation' && firstItemLinkElement === 'inbox')
      ) {
        item['selected'] = true;
      }
    });
  }
}
