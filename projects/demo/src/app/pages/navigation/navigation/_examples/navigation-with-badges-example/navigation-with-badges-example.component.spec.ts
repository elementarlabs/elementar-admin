import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationWithBadgesExampleComponent } from './navigation-with-badges-example.component';

describe('NavigationWithBadgesExampleComponent', () => {
  let component: NavigationWithBadgesExampleComponent;
  let fixture: ComponentFixture<NavigationWithBadgesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationWithBadgesExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationWithBadgesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
