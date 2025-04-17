import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNavGroupToggleComponent } from './sidebar-nav-group-toggle.component';

describe('SidebarNavGroupToggleComponent', () => {
  let component: SidebarNavGroupToggleComponent;
  let fixture: ComponentFixture<SidebarNavGroupToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarNavGroupToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarNavGroupToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
