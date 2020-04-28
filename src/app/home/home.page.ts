import { Component } from '@angular/core';
import data from '../../assets/zodiacSings.json';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public data = data;
  public description: string;
  constructor() {}

  public changeZodiac(event): void {
    const key = event.detail.value;
    const id = this.data.findIndex(item => {
      return item.name === key;
    });
    this.description = this.data[id].description;
  }
}
