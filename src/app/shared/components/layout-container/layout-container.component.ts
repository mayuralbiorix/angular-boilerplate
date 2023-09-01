import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { default as menuItemsByRole } from './menu-items.json';
import { AuthService } from '../../services/auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { SideNavMenu } from '../../models/side-nav-menu.model';
import { Store } from '@ngrx/store';
import { selectNavStatus } from 'src/app/store/app-selector';

@Component({
  selector: 'app-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.scss'],
})
export class LayoutContainerComponent implements OnInit {
  navExpanded$!: Observable<boolean>; // state of our left hand menu

  // subject for onDestroy, used to unsubscribe from subscriptions when the component is destroyed
  onDestroySubject = new Subject<void>();

  // Store user login status.
  isUserLoggedIn!: boolean;

  // logged in user role.
  userRole!: string;

  // items to be displayed in the left hand menu
  roleBasedMenuItems: SideNavMenu[] = [];
  
  constructor(
    private auth: AuthService,
    private router: Router,
    private store: Store) {
  }

  ngOnInit(): void {
    this.isUserLoggedIn = this.auth.isUserLoggedIn();
    if (this.isUserLoggedIn) {
      this.navExpanded$ = this.store.select(selectNavStatus);
      this.userRole = this.auth.getUserType();
      this.getMenuItems();
      this.watchForRouteChanges();
      this.exapandTheSideNavUntilAlreadySelectedNav();
    }

  }

  /**
   * Get side navigation menu items based on the user role
   */
  private getMenuItems(): void {
    this.roleBasedMenuItems = (menuItemsByRole as { [key: string]: SideNavMenu[] })[this.userRole];
    // reset the side nav to collapse
    this.resetSideNav(this.roleBasedMenuItems);
  }

  /**
   * Expand all the nav menus until finding the particular side nav to be selected.
   */
  private exapandTheSideNavUntilAlreadySelectedNav(): void {
    const path = this.createPathForTargetNav(this.roleBasedMenuItems, this.router.url, '');
    const pathLevelArray = path.split('/').filter(element => element);;
    if (pathLevelArray.length > 0) {
      this.tranverseToTheSelectedNav(this.roleBasedMenuItems, pathLevelArray, 0, pathLevelArray.length - 1);
    }
  }

  /**
   * Creating the path to the target nav to identify which nav menu should be selected. 
   * @param subNav - nav menus list.
   * @param targetLink - target nav item link to be searched for.
   * @param currentPath - keep track of the navigation path, 
   * @returns 
   */
  private createPathForTargetNav(subNav: SideNavMenu[], targetLink: string, currentPath: string): string {
    for (const node of subNav) {
      // loop all and find if the node matches the target 
      if (node?.link && targetLink.includes(node.link)) {
        // add the target node to path end
        return currentPath + '/' + node.string;
      } else if (node.subItems) {
        const path = this.createPathForTargetNav(node.subItems, targetLink, currentPath + '/' + node.string);
        if (path) return path;
      }
    }
    return '';
  }

  /**
   * Traverse to the selected nav to find and expand the side nav until the selected one is highlighted
   * @param menuItems - nav menu items. 
   * @param searchString - array of nav search string to be traverse through. 
   * @param currentLevel - to keep track of hierarchy level. 
   * @param maxLevel - the max hierarchy level need to traverse through in the nav menu items. 
   */
  private tranverseToTheSelectedNav(menuItems: SideNavMenu[], searchStrings: string[], currentLevel: number, maxLevel: number): void {
    menuItems.forEach((navItem: SideNavMenu) => {
      if (currentLevel === maxLevel) {
        return;
      }
      if (navItem.string === searchStrings[currentLevel]) {
        navItem.expanded = true;
        currentLevel++;
        this.tranverseToTheSelectedNav(navItem.subItems as SideNavMenu[], searchStrings, currentLevel, maxLevel)
      }
    })
  }

  /**
   * Reset side nav to collapse
   * 
   * @param nav - the side nav lists
   */
  private resetSideNav(nav: SideNavMenu[]): void {
    for (let parent of nav) {
      if (parent.subItems) {
        parent.expanded = false;
        this.resetSideNav(parent.subItems);
      }
    }
  };

  /**
   * Watch for route changes to expand the side nav based on the route rul.
   */
  watchForRouteChanges(): void {
    this.router.events.pipe(takeUntil(this.onDestroySubject)).subscribe((routerEvent) => {
      // Some functions only need to be called on navigation end (when route change is completed)
      if (routerEvent instanceof NavigationEnd) {
        this.exapandTheSideNavUntilAlreadySelectedNav();
      }
    });
  }
}
