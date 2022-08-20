import { Component, OnInit } from '@angular/core';
import {NzNotificationService} from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [{provide: NzNotificationService, useClass: NzNotificationService}]
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  user;

  constructor(private notif: NzNotificationService) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('loggedInUser');
    this.notif.success('WELCOMMM!!', `Shalom ${this.user}`);
  }

}
