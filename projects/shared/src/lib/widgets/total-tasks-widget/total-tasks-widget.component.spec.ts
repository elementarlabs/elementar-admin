import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalTasksWidgetComponent } from './total-tasks-widget.component';

describe('TotalTasksWidgetComponent', () => {
  let component: TotalTasksWidgetComponent;
  let fixture: ComponentFixture<TotalTasksWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalTasksWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotalTasksWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
