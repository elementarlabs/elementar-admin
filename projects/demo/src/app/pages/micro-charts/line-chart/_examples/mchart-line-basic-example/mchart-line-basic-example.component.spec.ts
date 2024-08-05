import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MchartLineBasicExampleComponent } from './mchart-line-basic-example.component';

describe('MchartLineBasicExampleComponent', () => {
  let component: MchartLineBasicExampleComponent;
  let fixture: ComponentFixture<MchartLineBasicExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MchartLineBasicExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MchartLineBasicExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
