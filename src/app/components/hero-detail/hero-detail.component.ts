import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Hero} from '../../models';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent {

  @Input() hero: Hero;

  @Output() back = new EventEmitter<undefined>();
  @Output() update = new EventEmitter<Hero>();

  constructor() { }

  goBack() {
    this.back.emit();
  }

  save() {
    this.update.emit(this.hero);
  }
}
