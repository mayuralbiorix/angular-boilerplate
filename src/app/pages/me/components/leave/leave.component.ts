import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent {

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle('Leave');
  }
  
}
