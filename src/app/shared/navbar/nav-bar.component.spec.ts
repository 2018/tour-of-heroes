import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {NavBarComponent} from './nav-bar.component';
import {NavBarModule} from './nav-bar.module';


describe('NavBar', () => {
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NavBarModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    fixture.detectChanges();
  });
});
