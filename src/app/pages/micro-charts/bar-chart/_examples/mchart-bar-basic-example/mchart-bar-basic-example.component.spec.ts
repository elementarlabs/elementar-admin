import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MchartBarBasicExampleComponent } from './mchart-bar-basic-example.component';

describe('MchartBarBasicExampleComponent', () => {
  let component: MchartBarBasicExampleComponent;
  let fixture: ComponentFixture<MchartBarBasicExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MchartBarBasicExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MchartBarBasicExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
