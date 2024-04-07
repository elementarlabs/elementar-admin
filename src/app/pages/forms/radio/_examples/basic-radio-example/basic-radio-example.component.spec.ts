import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicRadioExampleComponent } from './basic-radio-example.component';

describe('BasicRadioExampleComponent', () => {
  let component: BasicRadioExampleComponent;
  let fixture: ComponentFixture<BasicRadioExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicRadioExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicRadioExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
