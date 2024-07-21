import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationHeadingComponent } from './navigation-heading.component';

describe('NavigationHeadingComponent', () => {
  let component: NavigationHeadingComponent;
  let fixture: ComponentFixture<NavigationHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
