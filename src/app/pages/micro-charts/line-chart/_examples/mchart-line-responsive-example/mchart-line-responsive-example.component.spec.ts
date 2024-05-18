import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MchartLineResponsiveExampleComponent } from './mchart-line-responsive-example.component';

describe('MchartLineResponsiveExampleComponent', () => {
  let component: MchartLineResponsiveExampleComponent;
  let fixture: ComponentFixture<MchartLineResponsiveExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MchartLineResponsiveExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MchartLineResponsiveExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
