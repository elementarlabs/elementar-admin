import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionPanelAsAccordionExampleComponent } from './expansion-panel-as-accordion-example.component';

describe('ExpansionPanelAsAccordionExampleComponent', () => {
  let component: ExpansionPanelAsAccordionExampleComponent;
  let fixture: ComponentFixture<ExpansionPanelAsAccordionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpansionPanelAsAccordionExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpansionPanelAsAccordionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
