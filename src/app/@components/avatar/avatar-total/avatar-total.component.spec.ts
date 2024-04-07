import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarTotalComponent } from './avatar-total.component';

describe('AvatarTotalComponent', () => {
  let component: AvatarTotalComponent;
  let fixture: ComponentFixture<AvatarTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarTotalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvatarTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
