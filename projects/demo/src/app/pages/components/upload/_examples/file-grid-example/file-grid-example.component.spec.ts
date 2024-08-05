import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileGridExampleComponent } from './file-grid-example.component';

describe('FileGridExampleComponent', () => {
  let component: FileGridExampleComponent;
  let fixture: ComponentFixture<FileGridExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileGridExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FileGridExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
