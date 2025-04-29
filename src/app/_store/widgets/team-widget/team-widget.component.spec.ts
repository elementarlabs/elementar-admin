import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamWidgetComponent } from './team-widget.component';

describe('TeamWidgetComponent', () => {
  let component: TeamWidgetComponent;
  let fixture: ComponentFixture<TeamWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
