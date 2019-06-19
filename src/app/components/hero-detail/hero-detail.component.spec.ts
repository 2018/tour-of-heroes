import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HeroDetailComponent} from './hero-detail.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroDetailComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
      ]
    });

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
