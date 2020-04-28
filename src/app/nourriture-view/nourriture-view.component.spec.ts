import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NourritureViewComponent } from './nourriture-view.component';

describe('NourritureViewComponent', () => {
  let component: NourritureViewComponent;
  let fixture: ComponentFixture<NourritureViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NourritureViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NourritureViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
