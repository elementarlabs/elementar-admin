import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSidebarExampleComponent } from './layout-sidebar-example.component';

describe('LayoutSidebarExampleComponent', () => {
  let component: LayoutSidebarExampleComponent;
  let fixture: ComponentFixture<LayoutSidebarExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutSidebarExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutSidebarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
