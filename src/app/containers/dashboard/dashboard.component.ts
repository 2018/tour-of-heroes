import {Component, OnInit} from '@angular/core';
import {Hero} from '../../models';
import {Observable} from 'rxjs';
import {EntityCollectionService, EntityServices} from '@ngrx/data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

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
    this.heroesService.clearCache();
    this.heroesService.getWithQuery('limit=4');
  }
}
