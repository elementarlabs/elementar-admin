import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInputsExampleComponent } from './basic-inputs-example.component';

describe('BasicInputsExampleComponent', () => {
  let component: BasicInputsExampleComponent;
  let fixture: ComponentFixture<BasicInputsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicInputsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicInputsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
