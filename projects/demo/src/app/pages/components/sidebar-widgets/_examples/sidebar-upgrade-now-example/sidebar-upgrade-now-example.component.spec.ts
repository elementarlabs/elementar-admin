import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarUpgradeNowExampleComponent } from './sidebar-upgrade-now-example.component';

describe('SidebarUpgradeNowExampleComponent', () => {
  let component: SidebarUpgradeNowExampleComponent;
  let fixture: ComponentFixture<SidebarUpgradeNowExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarUpgradeNowExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarUpgradeNowExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
