import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {ContentHeaderComponent} from './content-header.component';
import {ContentHeaderModule} from './content-header.module';


describe('ComponentPageHeader', () => {
  let fixture: ComponentFixture<ContentHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ContentHeaderModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentHeaderComponent);
  });

  it('should return the title', () => {
    const component = fixture.componentInstance;
    const title = 'foobar';
    fixture.detectChanges();
    component.title = title;
    expect(component.title).toEqual(title);
  });
});
