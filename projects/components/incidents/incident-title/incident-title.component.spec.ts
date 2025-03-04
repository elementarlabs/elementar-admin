import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentTitleComponent } from './incident-title.component';

describe('IncidentTitleComponent', () => {
  let component: IncidentTitleComponent;
  let fixture: ComponentFixture<IncidentTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [IncidentTitleComponent]
});
    fixture = TestBed.createComponent(IncidentTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
