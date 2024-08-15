import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCompactExampleComponent } from './sidebar-compact-example.component';

describe('SidebarCompactExampleComponent', () => {
  let component: SidebarCompactExampleComponent;
  let fixture: ComponentFixture<SidebarCompactExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarCompactExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarCompactExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
