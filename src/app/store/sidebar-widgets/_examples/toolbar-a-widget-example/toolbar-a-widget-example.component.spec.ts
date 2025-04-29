import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarAWidgetExampleComponent } from './toolbar-a-widget-example.component';

describe('ToolbarAWidgetExampleComponent', () => {
  let component: ToolbarAWidgetExampleComponent;
  let fixture: ComponentFixture<ToolbarAWidgetExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarAWidgetExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarAWidgetExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
