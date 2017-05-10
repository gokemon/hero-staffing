import { Component, OnInit  } from '@angular/core';
// imports Angular "core" above and my stuff below
import { Hero } from './hero';
import { HeroService } from './hero.service';


// TypeDecorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
// exportable class
export class AppComponent  implements OnInit {
  title = 'Hero Staffing';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}// AppComponent class



