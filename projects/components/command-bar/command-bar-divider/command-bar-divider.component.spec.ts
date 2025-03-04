import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandBarDividerComponent } from './command-bar-divider.component';

describe('CommandBarDividerComponent', () => {
  let component: CommandBarDividerComponent;
  let fixture: ComponentFixture<CommandBarDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommandBarDividerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandBarDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
