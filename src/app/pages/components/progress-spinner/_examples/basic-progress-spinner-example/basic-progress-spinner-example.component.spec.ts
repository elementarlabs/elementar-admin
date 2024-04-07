import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicProgressSpinnerExampleComponent } from './basic-progress-spinner-example.component';

describe('BasicProgressSpinnerExampleComponent', () => {
  let component: BasicProgressSpinnerExampleComponent;
  let fixture: ComponentFixture<BasicProgressSpinnerExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicProgressSpinnerExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicProgressSpinnerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
