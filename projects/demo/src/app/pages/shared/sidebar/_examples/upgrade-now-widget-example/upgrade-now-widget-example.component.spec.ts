import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeNowWidgetExampleComponent } from './upgrade-now-widget-example.component';

describe('UpgradeNowWidgetExampleComponent', () => {
  let component: UpgradeNowWidgetExampleComponent;
  let fixture: ComponentFixture<UpgradeNowWidgetExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpgradeNowWidgetExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpgradeNowWidgetExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
