import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandCustomButtonLabelsExampleComponent } from './expand-custom-button-labels-example.component';

describe('ExpandCustomButtonLabelsExampleComponent', () => {
  let component: ExpandCustomButtonLabelsExampleComponent;
  let fixture: ComponentFixture<ExpandCustomButtonLabelsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpandCustomButtonLabelsExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandCustomButtonLabelsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
