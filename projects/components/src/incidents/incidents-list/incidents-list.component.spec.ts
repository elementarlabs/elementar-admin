import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentsListComponent } from './incidents-list.component';

describe('IncidentsListComponent', () => {
  let component: IncidentsListComponent;
  let fixture: ComponentFixture<IncidentsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncidentsListComponent]
    });
    fixture = TestBed.createComponent(IncidentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
