import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentsBarComponent } from './incidents-bar.component';

describe('IncidentsBarComponent', () => {
  let component: IncidentsBarComponent;
  let fixture: ComponentFixture<IncidentsBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [IncidentsBarComponent]
});
    fixture = TestBed.createComponent(IncidentsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
