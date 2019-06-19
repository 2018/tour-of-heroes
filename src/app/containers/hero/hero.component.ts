import {Component, Input} from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../../models';
import {EntityCollectionService, EntityServices} from '@ngrx/data';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  hero$: Observable<Hero>;
  heroesService: EntityCollectionService<Hero>;
  error$: Observable<any>;
  isLoading$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private entityServices: EntityServices,
    private location: Location
  ) {
    this.heroesService = entityServices.getEntityCollectionService('Hero');
    const id = this.route.snapshot.paramMap.get('id');
    this.hero$ = this.heroesService.getByKey(id);
    this.error$ = this.heroesService.errors$;
    this.isLoading$ = this.heroesService.loading$;
  }

  onLocationBack(): void {
    this.location.back();
  }

  onUpdateHero(hero: Hero) {
    this.heroesService.update(hero);
  }
}
