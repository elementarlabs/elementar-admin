import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogScrollableContentExampleComponent } from './dialog-scrollable-content-example.component';

describe('DialogScrollableContentExampleComponent', () => {
  let component: DialogScrollableContentExampleComponent;
  let fixture: ComponentFixture<DialogScrollableContentExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogScrollableContentExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogScrollableContentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
