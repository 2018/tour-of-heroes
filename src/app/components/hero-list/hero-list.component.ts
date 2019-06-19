import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Hero} from '../../models';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {
  @Input() heroes: Hero[] = [];
  @Input() loading: boolean;
  @Input() error: string;

  @Output() create = new EventEmitter<string>();
  @Output() remove = new EventEmitter<Hero>();

  constructor() { }

  addHero(name: string) {
    this.create.emit(name);
  }

  deleteHero(hero: Hero) {
    this.remove.emit(hero);
  }

}
