import {
  Directive, HostListener
} from '@angular/core';
import { setNavStatus } from 'src/app/store/app-action';
import { Store } from '@ngrx/store';

/**
 * This purpose of directive is to show/hide the side navigation based for mobile responsive/ screen window size.
 */
@Directive({
  selector: '[appNavAutoClose]'
})

export class NavAutoCloseDirective {

  constructor(private store: Store) { }
  
  /**
   * Listens for screen resize events.
   * 
   */
  @HostListener('window:resize', ['$event.target'])
  OnResize() {
    this.store.dispatch(setNavStatus({ navStatus: { isNavExpanded: window.innerWidth >= 650} }));
  }
}
