import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicBottomSheetExampleComponent } from './basic-bottom-sheet-example.component';

describe('BasicBottomSheetExampleComponent', () => {
  let component: BasicBottomSheetExampleComponent;
  let fixture: ComponentFixture<BasicBottomSheetExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicBottomSheetExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicBottomSheetExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
