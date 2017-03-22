import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {} from 'jasmine';
import { AboutusComponent } from './aboutus.component';

describe('AboutusComponent', () => {
  let component: AboutusComponent;
  let fixture: ComponentFixture<AboutusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Aboutus-component', async(() => {
    const fixture = TestBed.createComponent(AboutusComponent);
    const Aboutus = fixture.debugElement.componentInstance;
    expect(Aboutus).toBeTruthy();
  }));
});
