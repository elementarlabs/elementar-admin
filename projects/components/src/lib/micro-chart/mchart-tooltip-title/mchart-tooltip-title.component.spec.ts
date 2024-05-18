import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MchartTooltipTitleComponent } from './mchart-tooltip-title.component';

describe('MchartTooltipTitleComponent', () => {
  let component: MchartTooltipTitleComponent;
  let fixture: ComponentFixture<MchartTooltipTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MchartTooltipTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MchartTooltipTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
