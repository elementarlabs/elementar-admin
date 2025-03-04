import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentComponent } from './incident.component';

describe('IncidentComponent', () => {
  let component: IncidentComponent;
  let fixture: ComponentFixture<IncidentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [IncidentComponent]
});
    fixture = TestBed.createComponent(IncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
