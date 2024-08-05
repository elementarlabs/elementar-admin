import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTooltipExampleComponent } from './basic-tooltip-example.component';

describe('BasicTooltipExampleComponent', () => {
  let component: BasicTooltipExampleComponent;
  let fixture: ComponentFixture<BasicTooltipExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicTooltipExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicTooltipExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
