import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MchartBarWithBarHighlightExampleComponent } from './mchart-bar-with-bar-highlight-example.component';

describe('MchartBarWithBarHighlightExampleComponent', () => {
  let component: MchartBarWithBarHighlightExampleComponent;
  let fixture: ComponentFixture<MchartBarWithBarHighlightExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MchartBarWithBarHighlightExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MchartBarWithBarHighlightExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
