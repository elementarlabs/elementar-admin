import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MchartBarFillGradientExampleComponent } from './mchart-bar-fill-gradient-example.component';

describe('MchartBarFillGradientExampleComponent', () => {
  let component: MchartBarFillGradientExampleComponent;
  let fixture: ComponentFixture<MchartBarFillGradientExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MchartBarFillGradientExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MchartBarFillGradientExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
