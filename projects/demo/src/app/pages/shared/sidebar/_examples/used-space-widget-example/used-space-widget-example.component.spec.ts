import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedSpaceWidgetExampleComponent } from './used-space-widget-example.component';

describe('UsedSpaceWidgetExampleComponent', () => {
  let component: UsedSpaceWidgetExampleComponent;
  let fixture: ComponentFixture<UsedSpaceWidgetExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsedSpaceWidgetExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsedSpaceWidgetExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
