import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

  constructor(private route: Router) { }
    
  /**
   * Go back to the dashboard.
   */
  goBackDashboard(): void {
    this.route.navigate(['/']);
  }
}
