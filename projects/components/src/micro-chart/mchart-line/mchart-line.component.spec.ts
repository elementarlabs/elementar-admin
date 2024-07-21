import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MchartLineComponent } from './mchart-line.component';

describe('MchartLineComponent', () => {
  let component: MchartLineComponent;
  let fixture: ComponentFixture<MchartLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MchartLineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MchartLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
