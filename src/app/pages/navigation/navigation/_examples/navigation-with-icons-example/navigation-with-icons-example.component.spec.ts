import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationWithIconsExampleComponent } from './navigation-with-icons-example.component';

describe('NavigationWithIconsExampleComponent', () => {
  let component: NavigationWithIconsExampleComponent;
  let fixture: ComponentFixture<NavigationWithIconsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationWithIconsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigationWithIconsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
