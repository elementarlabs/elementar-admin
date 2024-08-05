import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsWithInputExampleComponent } from './chips-with-input-example.component';

describe('ChipsWithInputExampleComponent', () => {
  let component: ChipsWithInputExampleComponent;
  let fixture: ComponentFixture<ChipsWithInputExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipsWithInputExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChipsWithInputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
