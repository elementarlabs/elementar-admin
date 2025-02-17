import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationWithDividerExampleComponent } from './navigation-with-divider-example.component';

describe('NavigationWithDividerExampleComponent', () => {
  let component: NavigationWithDividerExampleComponent;
  let fixture: ComponentFixture<NavigationWithDividerExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationWithDividerExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigationWithDividerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
