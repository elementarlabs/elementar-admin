import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutWithNestedLayoutsExampleComponent } from './layout-with-nested-layouts-example.component';

describe('LayoutWithNestedLayoutsExampleComponent', () => {
  let component: LayoutWithNestedLayoutsExampleComponent;
  let fixture: ComponentFixture<LayoutWithNestedLayoutsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutWithNestedLayoutsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutWithNestedLayoutsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
