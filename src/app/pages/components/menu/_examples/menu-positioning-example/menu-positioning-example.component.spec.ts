import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPositioningExampleComponent } from './menu-positioning-example.component';

describe('MenuPositioningExampleComponent', () => {
  let component: MenuPositioningExampleComponent;
  let fixture: ComponentFixture<MenuPositioningExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPositioningExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuPositioningExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
