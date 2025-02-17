import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationWithNestedMenuExampleComponent } from './navigation-with-nested-menu-example.component';

describe('NavigationWithNestedMenuExampleComponent', () => {
  let component: NavigationWithNestedMenuExampleComponent;
  let fixture: ComponentFixture<NavigationWithNestedMenuExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationWithNestedMenuExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigationWithNestedMenuExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
