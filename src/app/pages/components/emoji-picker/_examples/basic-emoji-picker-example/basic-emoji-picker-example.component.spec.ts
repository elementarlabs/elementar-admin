import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicEmojiPickerExampleComponent } from './basic-emoji-picker-example.component';

describe('BasicEmojiPickerExampleComponent', () => {
  let component: BasicEmojiPickerExampleComponent;
  let fixture: ComponentFixture<BasicEmojiPickerExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicEmojiPickerExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicEmojiPickerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
