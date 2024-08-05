import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentProfileComponent } from './talent-profile.component';

describe('TalentProfileComponent', () => {
  let component: TalentProfileComponent;
  let fixture: ComponentFixture<TalentProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalentProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TalentProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
