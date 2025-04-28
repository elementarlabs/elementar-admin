import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataViewCustomCellRenderersExampleComponent } from './data-view-custom-cell-renderers-example.component';

describe('DataViewCustomCellRenderersExampleComponent', () => {
  let component: DataViewCustomCellRenderersExampleComponent;
  let fixture: ComponentFixture<DataViewCustomCellRenderersExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataViewCustomCellRenderersExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataViewCustomCellRenderersExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
