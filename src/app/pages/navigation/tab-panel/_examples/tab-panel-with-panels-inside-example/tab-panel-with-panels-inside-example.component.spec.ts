import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPanelWithPanelsInsideExampleComponent } from './tab-panel-with-panels-inside-example.component';

describe('TabPanelWithPanelsInsideExampleComponent', () => {
  let component: TabPanelWithPanelsInsideExampleComponent;
  let fixture: ComponentFixture<TabPanelWithPanelsInsideExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabPanelWithPanelsInsideExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabPanelWithPanelsInsideExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
