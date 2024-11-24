import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationGroupComponent } from './navigation-group.component';

describe('NavigationGroupComponent', () => {
  let component: NavigationGroupComponent;
  let fixture: ComponentFixture<NavigationGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [NavigationGroupComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(NavigationGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
