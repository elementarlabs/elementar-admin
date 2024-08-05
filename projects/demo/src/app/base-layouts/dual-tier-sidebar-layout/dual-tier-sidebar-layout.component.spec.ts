import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DualTierSidebarLayoutComponent } from './dual-tier-sidebar-layout.component';

describe('DualTierSidebarLayoutComponent', () => {
  let component: DualTierSidebarLayoutComponent;
  let fixture: ComponentFixture<DualTierSidebarLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DualTierSidebarLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DualTierSidebarLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
