import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationWithHeadingExampleComponent } from './navigation-with-heading-example.component';

describe('NavigationWithHeadingExampleComponent', () => {
  let component: NavigationWithHeadingExampleComponent;
  let fixture: ComponentFixture<NavigationWithHeadingExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationWithHeadingExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigationWithHeadingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
