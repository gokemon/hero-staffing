import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// imports Angular "core" above and my stuff below
import { HeroDetailComponent } from './hero-detail.component';


describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetailComponent ]
    })
    .compileComponents();
  })); // is this a test?

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }); // is this a test?

  it('should create', () => {
    expect(component).toBeTruthy();
  }); // it should test
});
