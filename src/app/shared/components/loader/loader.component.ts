import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectLoadingStatus } from 'src/app/store/app-selector';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {

  // flag to show/hide the loader 
  isShowLoading$!: Observable<boolean>;

  constructor(
    private store: Store
  ) {
    // fetch the latest value of loader from store 
    this.isShowLoading$ = this.store.select(selectLoadingStatus);
  }
}
