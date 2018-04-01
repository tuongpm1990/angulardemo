import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }
  hero: Hero = {
    id: 1,
    name: 'tuong'
  };
  selectedHero: Hero;
  listhHeros: Hero[];
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getListHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.listhHeros = heroes);
  }
  ngOnInit() {
    this.getListHeroes();
  }

}
