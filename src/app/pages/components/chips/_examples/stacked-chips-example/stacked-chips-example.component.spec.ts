import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedChipsExampleComponent } from './stacked-chips-example.component';

describe('StackedChipsExampleComponent', () => {
  let component: StackedChipsExampleComponent;
  let fixture: ComponentFixture<StackedChipsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackedChipsExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StackedChipsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
