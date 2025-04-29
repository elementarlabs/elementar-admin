import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalProjectsWidgetComponent } from './total-projects-widget.component';

describe('TotalProjectsWidgetComponent', () => {
  let component: TotalProjectsWidgetComponent;
  let fixture: ComponentFixture<TotalProjectsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalProjectsWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotalProjectsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
