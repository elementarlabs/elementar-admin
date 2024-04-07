import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomThumbLabelFormattingExampleComponent } from './custom-thumb-label-formatting-example.component';

describe('CustomThumbLabelFormattingExampleComponent', () => {
  let component: CustomThumbLabelFormattingExampleComponent;
  let fixture: ComponentFixture<CustomThumbLabelFormattingExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomThumbLabelFormattingExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomThumbLabelFormattingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
