import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledExampleComponent } from './disabled-example.component';

describe('DisabledExampleComponent', () => {
  let component: DisabledExampleComponent;
  let fixture: ComponentFixture<DisabledExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisabledExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisabledExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
