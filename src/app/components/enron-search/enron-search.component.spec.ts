import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnronSearchComponent } from './enron-search.component';

describe('EnronSearchComponent', () => {
  let component: EnronSearchComponent;
  let fixture: ComponentFixture<EnronSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnronSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnronSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
