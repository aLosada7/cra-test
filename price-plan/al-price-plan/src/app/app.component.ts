import { Component } from '@angular/core';

@Component({
  selector: 'al-price-plan',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'al-price-plan';

  handleSelection(selection: string) {
    console.log('selection: ', selection);
  }
}
