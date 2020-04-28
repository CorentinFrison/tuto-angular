import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleVendeurComponent } from './single-vendeur.component';

describe('SingleVendeurComponent', () => {
  let component: SingleVendeurComponent;
  let fixture: ComponentFixture<SingleVendeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleVendeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleVendeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
