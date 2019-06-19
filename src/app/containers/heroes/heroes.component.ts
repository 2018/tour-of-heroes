import {Component, OnInit} from '@angular/core';
import {EntityCollectionService, EntityServices} from '@ngrx/data';
import { Observable } from 'rxjs';
import { Hero } from '../../models';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  heroesService: EntityCollectionService<Hero>;
  error$: Observable<any>;
  isLoading$: Observable<boolean>;

  constructor(entityServices: EntityServices) {
    this.heroesService = entityServices.getEntityCollectionService('Hero');
    this.heroes$ = this.heroesService.entities$;
    this.error$ = this.heroesService.errors$;
    this.isLoading$ = this.heroesService.loading$;
  }

  ngOnInit(): void {
    this.heroesService.getAll();
  }

  onAddHero(heroName: string) {
    const hero: Hero = {
      name: heroName
    };
    this.heroesService.add(hero);
  }

  onDeleteHero(hero: Hero) {
    this.heroesService.delete(hero);
  }
}
