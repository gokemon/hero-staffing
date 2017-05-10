import { Injectable } from '@angular/core';
// imports Angular "core" above and my stuff below
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// TypeDecorator
@Injectable() // no meta-data stuff here?
// exportable class for others to import
export class HeroService {
  // constructor() {
  //   // code stub
  // }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  // See the "Take it slow" appendix
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
}// HeroService class as service




/*
* The HeroService could get Hero data from anywhere—
* ~ a web service, local storage, or a mock data source. 
* Removing data access from the component means you can 
* change your mind about the implementation anytime, 
* without touching the components that need hero data.
*/