import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MchartLineWithAreaExampleComponent } from './mchart-line-with-area-example.component';

describe('MchartLineWithAreaExampleComponent', () => {
  let component: MchartLineWithAreaExampleComponent;
  let fixture: ComponentFixture<MchartLineWithAreaExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MchartLineWithAreaExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MchartLineWithAreaExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
