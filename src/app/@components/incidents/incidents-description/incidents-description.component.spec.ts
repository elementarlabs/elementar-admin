import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentsDescriptionComponent } from './incidents-description.component';

describe('IncidentsDescriptionComponent', () => {
  let component: IncidentsDescriptionComponent;
  let fixture: ComponentFixture<IncidentsDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncidentsDescriptionComponent]
    });
    fixture = TestBed.createComponent(IncidentsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
