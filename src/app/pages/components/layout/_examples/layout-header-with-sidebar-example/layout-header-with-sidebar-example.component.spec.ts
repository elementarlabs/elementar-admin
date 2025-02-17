import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutHeaderWithSidebarExampleComponent } from './layout-header-with-sidebar-example.component';

describe('LayoutHeaderWithSidebarExampleComponent', () => {
  let component: LayoutHeaderWithSidebarExampleComponent;
  let fixture: ComponentFixture<LayoutHeaderWithSidebarExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutHeaderWithSidebarExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutHeaderWithSidebarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
