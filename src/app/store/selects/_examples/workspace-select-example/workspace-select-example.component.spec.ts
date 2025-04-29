import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceSelectExampleComponent } from './workspace-select-example.component';

describe('WorkspaceSelectExampleComponent', () => {
  let component: WorkspaceSelectExampleComponent;
  let fixture: ComponentFixture<WorkspaceSelectExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkspaceSelectExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkspaceSelectExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
