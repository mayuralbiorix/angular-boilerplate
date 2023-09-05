import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  
  constructor(
    private titleService: Title,
    private location: Location) {
    this.titleService.setTitle('Not found');
  }

  /**
   * Go back to the dashboard.
   */
  goBackDashboard(): void {
    this.location.back();
  }
}
