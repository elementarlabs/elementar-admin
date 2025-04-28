import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionPanelExpandCollapseTogglesExampleComponent } from './expansion-panel-expand-collapse-toggles-example.component';

describe('ExpansionPanelExpandCollapseTogglesExampleComponent', () => {
  let component: ExpansionPanelExpandCollapseTogglesExampleComponent;
  let fixture: ComponentFixture<ExpansionPanelExpandCollapseTogglesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpansionPanelExpandCollapseTogglesExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpansionPanelExpandCollapseTogglesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
