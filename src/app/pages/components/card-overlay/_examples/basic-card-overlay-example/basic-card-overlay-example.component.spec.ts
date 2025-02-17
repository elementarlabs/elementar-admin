import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCardOverlayExampleComponent } from './basic-card-overlay-example.component';

describe('BasicCardOverlayExampleComponent', () => {
  let component: BasicCardOverlayExampleComponent;
  let fixture: ComponentFixture<BasicCardOverlayExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicCardOverlayExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicCardOverlayExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
