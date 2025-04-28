import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleFlagsExampleComponent } from './circle-flags-example.component';

describe('CircleFlagsExampleComponent', () => {
  let component: CircleFlagsExampleComponent;
  let fixture: ComponentFixture<CircleFlagsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircleFlagsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CircleFlagsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
