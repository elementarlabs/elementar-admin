import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataViewWithPaginationExampleComponent } from './data-view-with-pagination-example.component';

describe('DataViewWithPaginationExampleComponent', () => {
  let component: DataViewWithPaginationExampleComponent;
  let fixture: ComponentFixture<DataViewWithPaginationExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataViewWithPaginationExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataViewWithPaginationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
