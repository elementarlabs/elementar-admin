import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitDurationWidgetComponent } from './visit-duration-widget.component';

describe('VisitDurationWidgetComponent', () => {
  let component: VisitDurationWidgetComponent;
  let fixture: ComponentFixture<VisitDurationWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitDurationWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisitDurationWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
