import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreWidgetComponent } from './explore-widget.component';

describe('ExploreWidgetComponent', () => {
  let component: ExploreWidgetComponent;
  let fixture: ComponentFixture<ExploreWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
