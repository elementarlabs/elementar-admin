import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentActivityExampleComponent } from './recent-activity-example.component';

describe('RecentActivityExampleComponent', () => {
  let component: RecentActivityExampleComponent;
  let fixture: ComponentFixture<RecentActivityExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentActivityExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentActivityExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
