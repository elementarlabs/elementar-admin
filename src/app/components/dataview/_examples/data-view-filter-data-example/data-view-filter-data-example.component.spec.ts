import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataViewFilterDataExampleComponent } from './data-view-filter-data-example.component';

describe('DataViewFilterDataExampleComponent', () => {
  let component: DataViewFilterDataExampleComponent;
  let fixture: ComponentFixture<DataViewFilterDataExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataViewFilterDataExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataViewFilterDataExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
