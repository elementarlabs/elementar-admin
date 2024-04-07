import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCheckboxesExampleComponent } from './basic-checkboxes-example.component';

describe('BasicCheckboxesExampleComponent', () => {
  let component: BasicCheckboxesExampleComponent;
  let fixture: ComponentFixture<BasicCheckboxesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicCheckboxesExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicCheckboxesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
