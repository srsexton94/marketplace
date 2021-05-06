import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  template: `
    <header>
      <h1>{{ headerText }}</h1>
      <form>
        <input type="text" placeholder="Search" aria-label="Search"/>
        <button type="submit">></button>
      </form>
    </header>
  `
})
export class HeaderComponent {
  @Input() headerText: string = 'Marketplace'
}
