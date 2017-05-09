import { Component } from '@angular/core';
// imports Angular "core" above
import { Hero } from './hero';


/* I guess this constructor also goes somewhere else later
as it is not part of the app.component */
const HEROES: Hero[] = [
  { id: 11, name: 'George Marshall' },
  { id: 12, name: 'Dwight D. Eisenhower' },
  { id: 13, name: 'Douglas MacArthur' },
  { id: 14, name: 'Omar Bradley' },
  { id: 15, name: 'Mark W. Clark' },
  { id: 16, name: 'Harold Alexander' },
  { id: 17, name: 'Courtney Hodges' },
  { id: 27, name: 'Matthew B. Ridgeway' },
  { id: 82, name: 'James M. Gavin' },
  { id: 20, name: 'William Orlando Darby' },
  { id: 21, name: 'Robert T. Frederick' },
  { id: 101, name: 'Anthony McAuliffe' }
];


// TypeDecorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// exportable class
export class AppComponent {
  title = 'Hero Staffing';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}// AppComponent class



