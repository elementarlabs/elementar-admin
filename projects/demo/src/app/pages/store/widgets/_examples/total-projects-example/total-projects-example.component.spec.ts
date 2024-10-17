import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalProjectsExampleComponent } from './total-projects-example.component';

describe('TotalProjectsExampleComponent', () => {
  let component: TotalProjectsExampleComponent;
  let fixture: ComponentFixture<TotalProjectsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalProjectsExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalProjectsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
