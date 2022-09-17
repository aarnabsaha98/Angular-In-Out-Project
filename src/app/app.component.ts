import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1> Hello Buddy!</h1>`,
  styleUrls: ['./app.component.scss']
  // styles: [`h1 { font-size: 24px; color:red; }`]
})
export class AppComponent {
  title = 'hotelInventoryApp';
  role = 'Admin';
}
