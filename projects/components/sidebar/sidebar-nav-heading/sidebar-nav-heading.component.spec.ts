import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNavHeadingComponent } from './sidebar-nav-heading.component';

describe('SidebarNavHeadingComponent', () => {
  let component: SidebarNavHeadingComponent;
  let fixture: ComponentFixture<SidebarNavHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarNavHeadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarNavHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
