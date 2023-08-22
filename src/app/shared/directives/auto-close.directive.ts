import {
  Directive, HostListener
} from '@angular/core';
import { NavigationService } from '../services/navigation.service';

/**
 * This purpose of directive is to show/hide the side navigation based for mobile responsive/ screen window size.
 */
@Directive({
  selector: '[appNavAutoClose]'
})

export class NavAutoCloseDirective {
  constructor(private navigationService: NavigationService) { }

  /**
   * Listens for screen resize events.
   * 
   */
  @HostListener('window:resize', ['$event.target'])
  OnResize() {
    this.navigationService.updateNavigationStatus(window.innerWidth >= 650);
  }
}
