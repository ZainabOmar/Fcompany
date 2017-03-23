import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrainStormingComponent } from './brain-storming.component';

describe('BrainStormingComponent', () => {
  let component: BrainStormingComponent;
  let fixture: ComponentFixture<BrainStormingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrainStormingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrainStormingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
