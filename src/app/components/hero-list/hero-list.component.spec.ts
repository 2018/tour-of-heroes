import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HeroListComponent} from './hero-list.component';
import {HeroDetailComponent} from '..';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

describe('HeroListComponent', () => {
  let component: HeroListComponent;
  let fixture: ComponentFixture<HeroListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroListComponent,
        HeroDetailComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        RouterTestingModule.withRoutes([])
      ],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
