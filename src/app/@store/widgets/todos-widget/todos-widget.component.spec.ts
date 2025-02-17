import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosWidgetComponent } from './todos-widget.component';

describe('TodosWidgetComponent', () => {
  let component: TodosWidgetComponent;
  let fixture: ComponentFixture<TodosWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodosWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
