import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResettingValueExampleComponent } from './resetting-value-example.component';

describe('ResettingValueExampleComponent', () => {
  let component: ResettingValueExampleComponent;
  let fixture: ComponentFixture<ResettingValueExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResettingValueExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResettingValueExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
