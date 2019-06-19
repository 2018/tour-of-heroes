import {Component, Input} from '@angular/core';
import {Hero} from '../../models';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: [ './dashboard-view.component.css' ]
})
export class DashboardViewComponent {

  @Input() heroes: Hero[] = [];
  @Input() loading: boolean;
  @Input() error: string;

  constructor() { }
}
