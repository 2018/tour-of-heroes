import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RootStoreModule } from './root-store';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {
  DashboardViewComponent,
  HeroDetailComponent,
  HeroListComponent
} from './components';
import {
  DashboardComponent,
  HeroComponent,
  HeroesComponent
} from './containers';

@NgModule({
  declarations: [
    AppComponent,
    DashboardViewComponent,
    HeroDetailComponent,
    HeroListComponent,
    DashboardComponent,
    HeroesComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RootStoreModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
