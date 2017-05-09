import { Component, OnInit, Input  } from '@angular/core';
// imports Angular "core" above
import { Hero } from '../hero';

// TypeDecorator
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
// exportable class so we can import it elsewhere
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  constructor() {
    // code stub
  }
  ngOnInit() {
    // code stub
  }
}// HeroDetailComponent class
