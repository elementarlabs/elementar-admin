import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerHorizontalAndVerticalExampleComponent } from './divider-horizontal-and-vertical-example.component';

describe('DividerHorizontalAndVerticalExampleComponent', () => {
  let component: DividerHorizontalAndVerticalExampleComponent;
  let fixture: ComponentFixture<DividerHorizontalAndVerticalExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DividerHorizontalAndVerticalExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DividerHorizontalAndVerticalExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
