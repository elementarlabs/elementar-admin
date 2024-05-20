import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MchartBarWithTooltipExampleComponent } from './mchart-bar-with-tooltip-example.component';

describe('MchartBarWithTooltipExampleComponent', () => {
  let component: MchartBarWithTooltipExampleComponent;
  let fixture: ComponentFixture<MchartBarWithTooltipExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MchartBarWithTooltipExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MchartBarWithTooltipExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
