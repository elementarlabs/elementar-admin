import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamExampleComponent } from './team-example.component';

describe('TeamExampleComponent', () => {
  let component: TeamExampleComponent;
  let fixture: ComponentFixture<TeamExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
