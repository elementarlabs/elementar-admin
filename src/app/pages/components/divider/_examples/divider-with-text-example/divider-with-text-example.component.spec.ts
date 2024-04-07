import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerWithTextExampleComponent } from './divider-with-text-example.component';

describe('DividerWithTextExampleComponent', () => {
  let component: DividerWithTextExampleComponent;
  let fixture: ComponentFixture<DividerWithTextExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DividerWithTextExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DividerWithTextExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
