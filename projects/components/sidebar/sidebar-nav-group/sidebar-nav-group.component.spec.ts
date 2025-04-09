import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNavGroupComponent } from './sidebar-nav-group.component';

describe('SidebarNavGroupComponent', () => {
  let component: SidebarNavGroupComponent;
  let fixture: ComponentFixture<SidebarNavGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarNavGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarNavGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
