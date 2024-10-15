import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitDurationExampleComponent } from './visit-duration-example.component';

describe('VisitDurationExampleComponent', () => {
  let component: VisitDurationExampleComponent;
  let fixture: ComponentFixture<VisitDurationExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitDurationExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitDurationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
