import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksInProgressExampleComponent } from './tasks-in-progress-example.component';

describe('TasksInProgressExampleComponent', () => {
  let component: TasksInProgressExampleComponent;
  let fixture: ComponentFixture<TasksInProgressExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksInProgressExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksInProgressExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
