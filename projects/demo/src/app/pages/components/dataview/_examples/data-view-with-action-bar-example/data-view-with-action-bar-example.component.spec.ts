import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataViewWithActionBarExampleComponent } from './data-view-with-action-bar-example.component';

describe('DataViewWithActionBarExampleComponent', () => {
  let component: DataViewWithActionBarExampleComponent;
  let fixture: ComponentFixture<DataViewWithActionBarExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataViewWithActionBarExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataViewWithActionBarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
