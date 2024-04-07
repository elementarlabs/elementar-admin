import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetExampleComponent } from './bottom-sheet-example.component';

describe('BottomSheetExampleComponent', () => {
  let component: BottomSheetExampleComponent;
  let fixture: ComponentFixture<BottomSheetExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomSheetExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BottomSheetExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
