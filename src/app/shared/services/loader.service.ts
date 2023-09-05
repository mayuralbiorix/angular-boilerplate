import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setLoadingStatus } from 'src/app/store/app-action';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(
    private store: Store
  ) { }

  /**
   * Show loading.
   */
  show(): void {
    this.store.dispatch(setLoadingStatus({ loadingStatus: { isShowLoading: true } }));
  }

  /**
   * Hide loading. 
   */
  hide(): void {
    this.store.dispatch(setLoadingStatus({ loadingStatus: { isShowLoading: false } }));
  }
}
