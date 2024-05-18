import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MchartTooltipBodyComponent } from './mchart-tooltip-body.component';

describe('MchartTooltipBodyComponent', () => {
  let component: MchartTooltipBodyComponent;
  let fixture: ComponentFixture<MchartTooltipBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MchartTooltipBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MchartTooltipBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
