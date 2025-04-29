import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspacesSelectComponent } from './workspaces-select.component';

describe('WorkspacesSelectComponent', () => {
  let component: WorkspacesSelectComponent;
  let fixture: ComponentFixture<WorkspacesSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkspacesSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkspacesSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
