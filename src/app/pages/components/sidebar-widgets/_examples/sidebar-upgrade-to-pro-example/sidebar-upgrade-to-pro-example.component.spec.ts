import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarUpgradeToProExampleComponent } from './sidebar-upgrade-to-pro-example.component';

describe('SidebarUpgradeToProExampleComponent', () => {
  let component: SidebarUpgradeToProExampleComponent;
  let fixture: ComponentFixture<SidebarUpgradeToProExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarUpgradeToProExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarUpgradeToProExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
