import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MchartPieComponent } from './mchart-pie.component';

describe('MchartPieComponent', () => {
  let component: MchartPieComponent;
  let fixture: ComponentFixture<MchartPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MchartPieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MchartPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
