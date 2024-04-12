import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadTriggerComponent } from './upload-trigger.component';

describe('UploadTriggerComponent', () => {
  let component: UploadTriggerComponent;
  let fixture: ComponentFixture<UploadTriggerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadTriggerComponent]
    });
    fixture = TestBed.createComponent(UploadTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
