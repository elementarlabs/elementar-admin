import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalTasksExampleComponent } from './total-tasks-example.component';

describe('TotalTasksExampleComponent', () => {
  let component: TotalTasksExampleComponent;
  let fixture: ComponentFixture<TotalTasksExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalTasksExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalTasksExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
