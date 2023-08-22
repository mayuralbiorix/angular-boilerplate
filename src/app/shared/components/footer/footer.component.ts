import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() showFullFooter = true; // if true, will show the full footer that is typically visible only on the login and reset password pages

  copyrightYear = (new Date()).getFullYear();


}
