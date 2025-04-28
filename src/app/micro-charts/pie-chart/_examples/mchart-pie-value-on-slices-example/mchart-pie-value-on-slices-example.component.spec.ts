import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MchartPieValueOnSlicesExampleComponent } from './mchart-pie-value-on-slices-example.component';

describe('MchartPieValueOnSlicesExampleComponent', () => {
  let component: MchartPieValueOnSlicesExampleComponent;
  let fixture: ComponentFixture<MchartPieValueOnSlicesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MchartPieValueOnSlicesExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MchartPieValueOnSlicesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
