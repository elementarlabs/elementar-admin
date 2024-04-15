import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarUsedSpaceExampleComponent } from './sidebar-used-space-example.component';

describe('SidebarUsedSpaceExampleComponent', () => {
  let component: SidebarUsedSpaceExampleComponent;
  let fixture: ComponentFixture<SidebarUsedSpaceExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarUsedSpaceExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarUsedSpaceExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
