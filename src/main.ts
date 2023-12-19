import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <div class="d-flex">
    <label for="setStartDate">Select Date</label>
    <input type="date" class="form-control" id="setStartDate" [(ngModel)]="myDate" (input)="handleDate()">
     <button (click)="getData()">OK</button>
  </div>
  `,
})
export class App {
  name = 'Angular';
  weatherList: Weather[] = [];
  dateArray: string[] = [];
  forecastArray: ForecastData[] = [];

  constructor(private http: HttpClient) { }



}

bootstrapApplication(App);
