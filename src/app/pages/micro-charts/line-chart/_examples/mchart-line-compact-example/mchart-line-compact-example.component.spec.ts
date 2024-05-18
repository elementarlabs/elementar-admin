import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MchartLineCompactExampleComponent } from './mchart-line-compact-example.component';

describe('MchartLineCompactExampleComponent', () => {
  let component: MchartLineCompactExampleComponent;
  let fixture: ComponentFixture<MchartLineCompactExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MchartLineCompactExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MchartLineCompactExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
