import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { HEROES } from '../data-heroes/data-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }
  hero: Hero = {
    id: 1,
    name: 'tuong'
  };
  selectedHero: Hero;
  listhHeros = HEROES;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  ngOnInit() {
  }

}
