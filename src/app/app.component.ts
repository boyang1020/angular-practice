import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: [
    `
      h3 {
        color: red;
      }
    `,
  ],
})
export class AppComponent {
  username: string = '';
  clearUsername() {
    this.username = '';
  }
  show: boolean = true;
  log = [];

  onSelect() {
    this.show = !this.show;
    this.log.push(new Date());
  }
}
