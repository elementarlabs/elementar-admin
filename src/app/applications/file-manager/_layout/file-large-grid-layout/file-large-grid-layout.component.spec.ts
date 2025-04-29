import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileLargeGridLayoutComponent } from './file-large-grid-layout.component';

describe('FileLargeGridLayoutComponent', () => {
  let component: FileLargeGridLayoutComponent;
  let fixture: ComponentFixture<FileLargeGridLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileLargeGridLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FileLargeGridLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
