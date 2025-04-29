import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedSpaceComponent } from './used-space.component';

describe('UsedSpaceComponent', () => {
  let component: UsedSpaceComponent;
  let fixture: ComponentFixture<UsedSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsedSpaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsedSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
