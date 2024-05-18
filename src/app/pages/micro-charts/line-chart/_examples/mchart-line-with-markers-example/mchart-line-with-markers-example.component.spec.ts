import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MchartLineWithMarkersExampleComponent } from './mchart-line-with-markers-example.component';

describe('MchartLineWithMarkersExampleComponent', () => {
  let component: MchartLineWithMarkersExampleComponent;
  let fixture: ComponentFixture<MchartLineWithMarkersExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MchartLineWithMarkersExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MchartLineWithMarkersExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
