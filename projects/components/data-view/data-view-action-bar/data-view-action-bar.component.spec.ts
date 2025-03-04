import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataViewActionBarComponent } from './data-view-action-bar.component';

describe('DataViewActionBarComponent', () => {
  let component: DataViewActionBarComponent;
  let fixture: ComponentFixture<DataViewActionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataViewActionBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataViewActionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
