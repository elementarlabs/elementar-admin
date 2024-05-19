import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MchartBarResponsiveExampleComponent } from './mchart-bar-responsive-example.component';

describe('MchartBarResponsiveExampleComponent', () => {
  let component: MchartBarResponsiveExampleComponent;
  let fixture: ComponentFixture<MchartBarResponsiveExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MchartBarResponsiveExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MchartBarResponsiveExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
