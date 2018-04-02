import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listHeroes: Hero[] = [];
  constructor(private heroService: HeroService) { }
  ngOnInit() {
    this.getListHeroes();
  }
  getListHeroes(): void {
    this.heroService.getHeroes().subscribe( heroes => this.listHeroes = heroes.slice(1, 5));
  }
}
