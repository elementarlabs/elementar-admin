import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteVisitorsWidgetComponent } from './site-visitors-widget.component';

describe('SiteVisitorsWidgetComponent', () => {
  let component: SiteVisitorsWidgetComponent;
  let fixture: ComponentFixture<SiteVisitorsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteVisitorsWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SiteVisitorsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
