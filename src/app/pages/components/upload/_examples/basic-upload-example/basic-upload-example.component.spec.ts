import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicUploadExampleComponent } from './basic-upload-example.component';

describe('BasicUploadExampleComponent', () => {
  let component: BasicUploadExampleComponent;
  let fixture: ComponentFixture<BasicUploadExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicUploadExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicUploadExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
