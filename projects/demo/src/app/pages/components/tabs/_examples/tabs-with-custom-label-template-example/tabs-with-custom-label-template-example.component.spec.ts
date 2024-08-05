import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsWithCustomLabelTemplateExampleComponent } from './tabs-with-custom-label-template-example.component';

describe('TabsWithCustomLabelTemplateExampleComponent', () => {
  let component: TabsWithCustomLabelTemplateExampleComponent;
  let fixture: ComponentFixture<TabsWithCustomLabelTemplateExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsWithCustomLabelTemplateExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabsWithCustomLabelTemplateExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
