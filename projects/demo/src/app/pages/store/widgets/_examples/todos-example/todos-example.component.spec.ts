import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosExampleComponent } from './todos-example.component';

describe('TodosExampleComponent', () => {
  let component: TodosExampleComponent;
  let fixture: ComponentFixture<TodosExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
