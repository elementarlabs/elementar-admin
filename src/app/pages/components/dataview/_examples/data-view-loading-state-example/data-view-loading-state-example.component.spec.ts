import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataViewLoadingStateExampleComponent } from './data-view-loading-state-example.component';

describe('DataViewLoadingStateExampleComponent', () => {
  let component: DataViewLoadingStateExampleComponent;
  let fixture: ComponentFixture<DataViewLoadingStateExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataViewLoadingStateExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataViewLoadingStateExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
