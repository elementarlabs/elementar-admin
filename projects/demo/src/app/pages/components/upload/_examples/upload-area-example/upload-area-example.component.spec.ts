import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAreaExampleComponent } from './upload-area-example.component';

describe('UploadAreaExampleComponent', () => {
  let component: UploadAreaExampleComponent;
  let fixture: ComponentFixture<UploadAreaExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadAreaExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadAreaExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
