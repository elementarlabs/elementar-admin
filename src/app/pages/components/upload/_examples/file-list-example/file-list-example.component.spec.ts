import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileListExampleComponent } from './file-list-example.component';

describe('FileListExampleComponent', () => {
  let component: FileListExampleComponent;
  let fixture: ComponentFixture<FileListExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileListExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FileListExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
