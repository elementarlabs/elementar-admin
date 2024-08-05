import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryProgressBarExampleComponent } from './query-progress-bar-example.component';

describe('QueryProgressBarExampleComponent', () => {
  let component: QueryProgressBarExampleComponent;
  let fixture: ComponentFixture<QueryProgressBarExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryProgressBarExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QueryProgressBarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
