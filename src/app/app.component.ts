import { Component } from '@angular/core';

class HairstyleItem {
  location: string;
  price: number;
  hairstyle: string;
  picture: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: HairstyleItem[] = [{
    location: 'Madrid',
    price: 290,
    hairstyle: 'Cousin It',
    picture: 'assets/images/hirez.png'
  },
  {
    location: 'Copenhagen',
    price: 361,
    hairstyle: 'Boom Fox',
    picture: 'assets/images/hirez.png'
  }];
}
