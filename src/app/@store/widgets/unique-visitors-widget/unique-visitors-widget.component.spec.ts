import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueVisitorsWidgetComponent } from './unique-visitors-widget.component';

describe('UniqueVisitorsWidgetComponent', () => {
  let component: UniqueVisitorsWidgetComponent;
  let fixture: ComponentFixture<UniqueVisitorsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniqueVisitorsWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UniqueVisitorsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
