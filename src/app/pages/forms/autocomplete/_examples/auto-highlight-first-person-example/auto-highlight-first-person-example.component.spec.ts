import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoHighlightFirstPersonExampleComponent } from './auto-highlight-first-person-example.component';

describe('AutoHighlightFirstPersonExampleComponent', () => {
  let component: AutoHighlightFirstPersonExampleComponent;
  let fixture: ComponentFixture<AutoHighlightFirstPersonExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoHighlightFirstPersonExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutoHighlightFirstPersonExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
