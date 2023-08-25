import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { Subject, takeUntil } from 'rxjs';
import { default as menuItemsByRole } from './menu-items.json';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { SideNavMenu } from '../../models/side-nav-menu';

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
  roleBasedMenuItems: SideNavMenu[] = [];

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
    this.exapandTheSideNavUntilAlreadySelectedNav();
  }

  /**
   * Get side navigation menu items based on the user role
   */
  private getMenuItems() {
    this.roleBasedMenuItems = menuItemsByRole['admin'];
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
      if (node?.link && node.link === targetLink) {
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
}
