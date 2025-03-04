import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPanelCustomItemComponent } from './tab-panel-custom-item.component';

describe('TabPanelCustomItemComponent', () => {
  let component: TabPanelCustomItemComponent;
  let fixture: ComponentFixture<TabPanelCustomItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabPanelCustomItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabPanelCustomItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
