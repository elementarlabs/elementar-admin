import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandShowButtonIfExpandedExampleComponent } from './expand-show-button-if-expanded-example.component';

describe('ExpandShowButtonIfExpandedExampleComponent', () => {
  let component: ExpandShowButtonIfExpandedExampleComponent;
  let fixture: ComponentFixture<ExpandShowButtonIfExpandedExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpandShowButtonIfExpandedExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandShowButtonIfExpandedExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
