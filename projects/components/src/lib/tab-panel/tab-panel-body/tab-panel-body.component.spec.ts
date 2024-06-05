import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPanelBodyComponent } from './tab-panel-body.component';

describe('TabPanelBodyComponent', () => {
  let component: TabPanelBodyComponent;
  let fixture: ComponentFixture<TabPanelBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabPanelBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabPanelBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
