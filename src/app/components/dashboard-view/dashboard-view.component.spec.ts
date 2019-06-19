import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardViewComponent } from './dashboard-view.component';
import { RouterTestingModule } from '@angular/router/testing';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

describe('DashboardViewComponent', () => {
  let component: DashboardViewComponent;
  let fixture: ComponentFixture<DashboardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardViewComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
      ]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
