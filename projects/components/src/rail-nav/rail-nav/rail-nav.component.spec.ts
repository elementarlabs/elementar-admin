import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RailNavComponent } from './rail-nav.component';

describe('RailNavComponent', () => {
  let component: RailNavComponent;
  let fixture: ComponentFixture<RailNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RailNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RailNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
