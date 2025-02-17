import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksInProgressWidgetComponent } from './tasks-in-progress-widget.component';

describe('TasksInProgressWidgetComponent', () => {
  let component: TasksInProgressWidgetComponent;
  let fixture: ComponentFixture<TasksInProgressWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksInProgressWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TasksInProgressWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
