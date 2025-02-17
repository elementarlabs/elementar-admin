import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDialogExampleComponent } from './basic-dialog-example.component';

describe('BasicDialogExampleComponent', () => {
  let component: BasicDialogExampleComponent;
  let fixture: ComponentFixture<BasicDialogExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicDialogExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicDialogExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
