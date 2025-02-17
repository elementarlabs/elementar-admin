import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MchartBarCustomRadiusExampleComponent } from './mchart-bar-custom-radius-example.component';

describe('MchartBarCustomRadiusExampleComponent', () => {
  let component: MchartBarCustomRadiusExampleComponent;
  let fixture: ComponentFixture<MchartBarCustomRadiusExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MchartBarCustomRadiusExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MchartBarCustomRadiusExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
