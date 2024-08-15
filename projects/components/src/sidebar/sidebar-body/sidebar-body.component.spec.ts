import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarBodyComponent } from './sidebar-body.component';

describe('SidebarBodyComponent', () => {
  let component: SidebarBodyComponent;
  let fixture: ComponentFixture<SidebarBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
