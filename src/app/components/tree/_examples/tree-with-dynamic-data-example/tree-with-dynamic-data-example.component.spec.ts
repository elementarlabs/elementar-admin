import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeWithDynamicDataExampleComponent } from './tree-with-dynamic-data-example.component';

describe('TreeWithDynamicDataExampleComponent', () => {
  let component: TreeWithDynamicDataExampleComponent;
  let fixture: ComponentFixture<TreeWithDynamicDataExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeWithDynamicDataExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TreeWithDynamicDataExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
