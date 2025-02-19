import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarWithCustomIconsExampleComponent } from './sidebar-with-custom-icons-example.component';

describe('SidebarWithCustomIconsExampleComponent', () => {
  let component: SidebarWithCustomIconsExampleComponent;
  let fixture: ComponentFixture<SidebarWithCustomIconsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarWithCustomIconsExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarWithCustomIconsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
