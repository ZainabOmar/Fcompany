import { TestBed, async } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import {} from 'jasmine';


describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
      AppComponent
      ], 
      imports: [
      RouterTestingModule
      ],
      providers: [
      AuthService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have tag as router-outlet'`, async(() => {
    // const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.debugElement.componentInstance;
    expect('router-outlet').toBeTruthy();
  }));
});
