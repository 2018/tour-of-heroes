import { Routes } from '@angular/router';
import {
  DashboardComponent,
  HeroComponent,
  HeroesComponent
} from './containers';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroComponent },
  // fallback page
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },
];
