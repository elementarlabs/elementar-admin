import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSlideToggleExampleComponent } from './basic-slide-toggle-example.component';

describe('BasicSlideToggleExampleComponent', () => {
  let component: BasicSlideToggleExampleComponent;
  let fixture: ComponentFixture<BasicSlideToggleExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicSlideToggleExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicSlideToggleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
