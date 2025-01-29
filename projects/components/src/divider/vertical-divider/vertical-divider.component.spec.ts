import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalDividerComponent } from './vertical-divider.component';

describe('VDividerComponent', () => {
  let component: VerticalDividerComponent;
  let fixture: ComponentFixture<VerticalDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerticalDividerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
