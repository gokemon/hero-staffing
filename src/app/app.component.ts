import { Component } from '@angular/core';


/* Why is this up here? */
export class Hero {
  id: number;
  name: string;
}/* I would think this goes somewhere else */


// TypeDecorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// exportable class
export class AppComponent {
  title = 'Hero Staffing';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}// AppComponent class



