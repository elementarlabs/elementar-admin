import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsDragAndDropExampleComponent } from './chips-drag-and-drop-example.component';

describe('ChipsDragAndDropExampleComponent', () => {
  let component: ChipsDragAndDropExampleComponent;
  let fixture: ComponentFixture<ChipsDragAndDropExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipsDragAndDropExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChipsDragAndDropExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
