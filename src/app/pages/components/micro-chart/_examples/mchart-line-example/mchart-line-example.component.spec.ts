import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MchartLineExampleComponent } from './mchart-line-example.component';

describe('MchartLineExampleComponent', () => {
  let component: MchartLineExampleComponent;
  let fixture: ComponentFixture<MchartLineExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MchartLineExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MchartLineExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
