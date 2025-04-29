import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarWidgetExampleComponent } from './toolbar-widget-example.component';

describe('ToolbarWidgetExampleComponent', () => {
  let component: ToolbarWidgetExampleComponent;
  let fixture: ComponentFixture<ToolbarWidgetExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarWidgetExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarWidgetExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
