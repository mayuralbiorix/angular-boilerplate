import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { selectNavStatus } from 'src/app/store/app-selector';
import { setNavStatus } from 'src/app/store/app-action';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navExpanded!: boolean; // state of our left hand menu

  // Store user login status.
  isUserLoggedIn!: boolean;

  // user details
  userDetail!: User;

  // subject for onDestroy, used to unsubscribe from subscriptions when the component is destroyed
  onDestroySubject = new Subject<void>();

  constructor(
    private auth: AuthService,
    private store: Store
    ) {
  }

  ngOnInit(): void {
    // subscribing to the nav status from from the app state
    this.store.select(selectNavStatus).pipe(takeUntil(this.onDestroySubject)).subscribe((navExpanded) => {
      this.navExpanded = navExpanded;
    });

    this.isUserLoggedIn = this.auth.isUserLoggedIn();
    this.userDetail = this.auth.getUser();
  }


  /**
   * Updating the side nav status
   */
  updateNavState(): void{
    this.store.dispatch(setNavStatus({ navStatus: { isNavExpanded: !this.navExpanded} }));
  }

  /**
   * Logout user
   */
  logout() {
    this.auth.logout();
  }

}
