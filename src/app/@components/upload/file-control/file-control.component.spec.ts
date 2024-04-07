import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileControlComponent } from './file-control.component';

describe('FileControlComponent', () => {
  let component: FileControlComponent;
  let fixture: ComponentFixture<FileControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileControlComponent]
    });
    fixture = TestBed.createComponent(FileControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
