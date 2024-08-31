import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RailNavItemComponent } from './rail-nav-item.component';

describe('RailNavItemComponent', () => {
  let component: RailNavItemComponent;
  let fixture: ComponentFixture<RailNavItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RailNavItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RailNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
