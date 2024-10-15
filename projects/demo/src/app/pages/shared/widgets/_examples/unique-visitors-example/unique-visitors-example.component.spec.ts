import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueVisitorsExampleComponent } from './unique-visitors-example.component';

describe('UniqueVisitorsExampleComponent', () => {
  let component: UniqueVisitorsExampleComponent;
  let fixture: ComponentFixture<UniqueVisitorsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniqueVisitorsExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniqueVisitorsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
