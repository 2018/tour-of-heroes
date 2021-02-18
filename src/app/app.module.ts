import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {RootStoreModule} from './root-store';
import {HeroesModule} from './heroes';
import {AppRoutingModule} from './app-routing.module';
import {MoviesModule} from './movies/movies.module';
import {NavBarModule} from './shared/navbar/nav-bar.module';
import {FooterModule} from './shared/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    RootStoreModule,
    HeroesModule,
    NavBarModule,
    FooterModule,
    MoviesModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
