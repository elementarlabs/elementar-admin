import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MchartLineWithTooltipExampleComponent } from './mchart-line-with-tooltip-example.component';

describe('MchartLineWithTooltipExampleComponent', () => {
  let component: MchartLineWithTooltipExampleComponent;
  let fixture: ComponentFixture<MchartLineWithTooltipExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MchartLineWithTooltipExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MchartLineWithTooltipExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
