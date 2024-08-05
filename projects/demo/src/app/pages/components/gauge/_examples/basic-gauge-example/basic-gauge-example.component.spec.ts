import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicGaugeExampleComponent } from './basic-gauge-example.component';

describe('BasicGaugeExampleComponent', () => {
  let component: BasicGaugeExampleComponent;
  let fixture: ComponentFixture<BasicGaugeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicGaugeExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicGaugeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
