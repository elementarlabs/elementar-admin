import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataViewWithSortingExampleComponent } from './data-view-with-sorting-example.component';

describe('DataViewWithSortingExampleComponent', () => {
  let component: DataViewWithSortingExampleComponent;
  let fixture: ComponentFixture<DataViewWithSortingExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataViewWithSortingExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataViewWithSortingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
