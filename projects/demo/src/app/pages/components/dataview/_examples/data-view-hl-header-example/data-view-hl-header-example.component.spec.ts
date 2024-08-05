import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataViewHlHeaderExampleComponent } from './data-view-hl-header-example.component';

describe('DataViewHlHeaderExampleComponent', () => {
  let component: DataViewHlHeaderExampleComponent;
  let fixture: ComponentFixture<DataViewHlHeaderExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataViewHlHeaderExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataViewHlHeaderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
