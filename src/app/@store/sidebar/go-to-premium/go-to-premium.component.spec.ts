import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToPremiumComponent } from './go-to-premium.component';

describe('GoToPremiumComponent', () => {
  let component: GoToPremiumComponent;
  let fixture: ComponentFixture<GoToPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoToPremiumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoToPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
