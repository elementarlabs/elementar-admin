import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFound1Component } from './not-found-1.component';

describe('NotFound1Component', () => {
  let component: NotFound1Component;
  let fixture: ComponentFixture<NotFound1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFound1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFound1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
