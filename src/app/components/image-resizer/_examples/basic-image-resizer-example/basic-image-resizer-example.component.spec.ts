import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicImageResizerExampleComponent } from './basic-image-resizer-example.component';

describe('BasicImageResizerExampleComponent', () => {
  let component: BasicImageResizerExampleComponent;
  let fixture: ComponentFixture<BasicImageResizerExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicImageResizerExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicImageResizerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
