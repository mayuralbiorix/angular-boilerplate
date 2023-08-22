import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  // This variable is used to pass nav expanded status
  navExpandedEvent: BehaviorSubject<any> = new BehaviorSubject<boolean>(true);

  constructor() {
    // comment 
  }

  /**
   * Nav expanded status.
   * @returns 
   */
  isNavExpanded(): Observable<boolean> {
    return this.navExpandedEvent.asObservable();
  }

  /**
   * Update nav expanded behavior subject.
   *
   * @param {*} value - Nav expanded boolean value.
   */
  updateNavigationStatus(value: boolean): void {
    this.navExpandedEvent.next(value);
  }
}
