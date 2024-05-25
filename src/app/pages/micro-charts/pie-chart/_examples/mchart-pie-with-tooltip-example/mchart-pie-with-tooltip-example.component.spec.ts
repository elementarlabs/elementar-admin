import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MchartPieWithTooltipExampleComponent } from './mchart-pie-with-tooltip-example.component';

describe('MchartPieWithTooltipExampleComponent', () => {
  let component: MchartPieWithTooltipExampleComponent;
  let fixture: ComponentFixture<MchartPieWithTooltipExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MchartPieWithTooltipExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MchartPieWithTooltipExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
