import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentsContainerComponent } from './incidents-container.component';

describe('IncidentsContainerComponent', () => {
  let component: IncidentsContainerComponent;
  let fixture: ComponentFixture<IncidentsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidentsContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
