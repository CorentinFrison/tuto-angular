import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendeursViewComponent } from './vendeurs-view.component';

describe('VendeursViewComponent', () => {
  let component: VendeursViewComponent;
  let fixture: ComponentFixture<VendeursViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendeursViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendeursViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
