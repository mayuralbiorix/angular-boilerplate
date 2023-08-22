import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navExpanded!: boolean; // state of our left hand menu

  // Store user login status.
  isUserLoggedIn!: boolean;

  constructor(public navigationService: NavigationService,
    private auth: AuthService,) {
    this.navigationService.isNavExpanded().subscribe((navExpanded) => {
      this.navExpanded = navExpanded;
    });
  }

  ngOnInit(): void {
    this.isUserLoggedIn = this.auth.isUserLoggedIn();
  }

  /**
   * Logout user
   */
  logout() {
    this.auth.logout();
  }

}
