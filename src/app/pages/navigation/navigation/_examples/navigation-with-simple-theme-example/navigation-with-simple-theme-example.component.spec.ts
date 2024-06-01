import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationWithSimpleThemeExampleComponent } from './navigation-with-simple-theme-example.component';

describe('NavigationWithSimpleThemeExampleComponent', () => {
  let component: NavigationWithSimpleThemeExampleComponent;
  let fixture: ComponentFixture<NavigationWithSimpleThemeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationWithSimpleThemeExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigationWithSimpleThemeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
