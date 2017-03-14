import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatcompanyComponent } from './creatcompany.component';

describe('CreatcompanyComponent', () => {
  let component: CreatcompanyComponent;
  let fixture: ComponentFixture<CreatcompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatcompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
