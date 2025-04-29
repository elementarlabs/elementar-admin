import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeToProWidgetExampleComponent } from './upgrade-to-pro-widget-example.component';

describe('UpgradeToProWidgetExampleComponent', () => {
  let component: UpgradeToProWidgetExampleComponent;
  let fixture: ComponentFixture<UpgradeToProWidgetExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpgradeToProWidgetExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpgradeToProWidgetExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
