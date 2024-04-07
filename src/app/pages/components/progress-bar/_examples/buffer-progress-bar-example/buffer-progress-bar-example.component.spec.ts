import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BufferProgressBarExampleComponent } from './buffer-progress-bar-example.component';

describe('BufferProgressBarExampleComponent', () => {
  let component: BufferProgressBarExampleComponent;
  let fixture: ComponentFixture<BufferProgressBarExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BufferProgressBarExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BufferProgressBarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
