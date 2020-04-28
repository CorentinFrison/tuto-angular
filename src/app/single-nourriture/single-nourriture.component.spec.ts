import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNourritureComponent } from './single-nourriture.component';

describe('SingleNourritureComponent', () => {
  let component: SingleNourritureComponent;
  let fixture: ComponentFixture<SingleNourritureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleNourritureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleNourritureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
