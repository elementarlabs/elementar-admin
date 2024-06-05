import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPanelCompactExampleComponent } from './tab-panel-compact-example.component';

describe('TabPanelCompactExampleComponent', () => {
  let component: TabPanelCompactExampleComponent;
  let fixture: ComponentFixture<TabPanelCompactExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabPanelCompactExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabPanelCompactExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
