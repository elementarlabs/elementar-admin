import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeutralColorsExampleComponent } from './neutral-colors-example.component';

describe('NeutralColorsExampleComponent', () => {
  let component: NeutralColorsExampleComponent;
  let fixture: ComponentFixture<NeutralColorsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeutralColorsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NeutralColorsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
