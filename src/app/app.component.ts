import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <app-header [headerText]="title"></app-header>
    <app-main></app-main>
    <app-menu></app-menu>
  `
})
export class AppComponent {
  title = 'marketplace';
}
