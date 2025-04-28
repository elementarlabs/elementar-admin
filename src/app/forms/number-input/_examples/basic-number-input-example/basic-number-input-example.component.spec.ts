import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicNumberInputExampleComponent } from './basic-number-input-example.component';

describe('BasicNumberInputExampleComponent', () => {
  let component: BasicNumberInputExampleComponent;
  let fixture: ComponentFixture<BasicNumberInputExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicNumberInputExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicNumberInputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
