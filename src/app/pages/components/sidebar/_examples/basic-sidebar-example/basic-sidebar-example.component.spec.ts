import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSidebarExampleComponent } from './basic-sidebar-example.component';

describe('BasicSidebarExampleComponent', () => {
  let component: BasicSidebarExampleComponent;
  let fixture: ComponentFixture<BasicSidebarExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicSidebarExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicSidebarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
