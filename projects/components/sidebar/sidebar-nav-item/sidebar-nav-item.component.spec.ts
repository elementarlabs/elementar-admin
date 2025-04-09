import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNavItemComponent } from './sidebar-nav-item.component';

describe('SidebarNavItemComponent', () => {
  let component: SidebarNavItemComponent;
  let fixture: ComponentFixture<SidebarNavItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarNavItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
