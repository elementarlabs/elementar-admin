import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationSecondaryThemeExampleComponent } from './navigation-secondary-theme-example.component';

describe('NavigationSecondaryThemeExampleComponent', () => {
  let component: NavigationSecondaryThemeExampleComponent;
  let fixture: ComponentFixture<NavigationSecondaryThemeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationSecondaryThemeExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigationSecondaryThemeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
