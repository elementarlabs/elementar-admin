import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentsTitleComponent } from './incidents-title.component';

describe('IncidentsTitleComponent', () => {
  let component: IncidentsTitleComponent;
  let fixture: ComponentFixture<IncidentsTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [IncidentsTitleComponent]
});
    fixture = TestBed.createComponent(IncidentsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
