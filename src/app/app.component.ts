import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div class="toolbar" role="banner">
      <h1>{{ title }} app is running!</h1>
    </div>
  `
})
export class AppComponent {
  title = 'marketplace';
}
