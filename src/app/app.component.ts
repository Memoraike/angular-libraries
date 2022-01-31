import { Component, ViewChild } from '@angular/core';
import { NgxMatPaginator } from 'ngx-mat-paginator';

@Component({
  selector: 'ngx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(NgxMatPaginator) paginator!: NgxMatPaginator;
  title = 'angular-libraries';
  constructor() {
  }

  public goto(): void {
    this.paginator.firstPage();
  }
}
