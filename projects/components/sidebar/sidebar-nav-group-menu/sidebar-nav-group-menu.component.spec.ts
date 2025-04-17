import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNavGroupMenuComponent } from './sidebar-nav-group-menu.component';

describe('SidebarNavGroupMenuComponent', () => {
  let component: SidebarNavGroupMenuComponent;
  let fixture: ComponentFixture<SidebarNavGroupMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarNavGroupMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarNavGroupMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
