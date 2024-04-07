import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileGridLayoutComponent } from './file-grid-layout.component';

describe('FileGridLayoutComponent', () => {
  let component: FileGridLayoutComponent;
  let fixture: ComponentFixture<FileGridLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileGridLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FileGridLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
