import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarAutomaticColorExampleComponent } from './avatar-automatic-color-example.component';

describe('AvatarAutomaticColorExampleComponent', () => {
  let component: AvatarAutomaticColorExampleComponent;
  let fixture: ComponentFixture<AvatarAutomaticColorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarAutomaticColorExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvatarAutomaticColorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
