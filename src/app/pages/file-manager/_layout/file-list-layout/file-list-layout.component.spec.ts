import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileListLayoutComponent } from './file-list-layout.component';

describe('FileListLayoutComponent', () => {
  let component: FileListLayoutComponent;
  let fixture: ComponentFixture<FileListLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileListLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FileListLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
