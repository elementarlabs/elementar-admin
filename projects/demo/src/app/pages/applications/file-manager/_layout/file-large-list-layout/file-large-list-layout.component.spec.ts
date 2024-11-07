import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileLargeListLayoutComponent } from './file-large-list-layout.component';

describe('FileLargeListLayoutComponent', () => {
  let component: FileLargeListLayoutComponent;
  let fixture: ComponentFixture<FileLargeListLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileLargeListLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FileLargeListLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
