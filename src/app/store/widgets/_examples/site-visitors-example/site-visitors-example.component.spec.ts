import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteVisitorsExampleComponent } from './site-visitors-example.component';

describe('SiteVisitorsExampleComponent', () => {
  let component: SiteVisitorsExampleComponent;
  let fixture: ComponentFixture<SiteVisitorsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteVisitorsExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteVisitorsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
