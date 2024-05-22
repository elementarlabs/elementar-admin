import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MchartPieBasicExampleComponent } from './mchart-pie-basic-example.component';

describe('MchartPieBasicExampleComponent', () => {
  let component: MchartPieBasicExampleComponent;
  let fixture: ComponentFixture<MchartPieBasicExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MchartPieBasicExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MchartPieBasicExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
