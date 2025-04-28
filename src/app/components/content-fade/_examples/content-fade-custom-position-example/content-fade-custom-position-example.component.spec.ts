import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFadeCustomPositionExampleComponent } from './content-fade-custom-position-example.component';

describe('ContentFadeCustomPositionExampleComponent', () => {
  let component: ContentFadeCustomPositionExampleComponent;
  let fixture: ComponentFixture<ContentFadeCustomPositionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentFadeCustomPositionExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentFadeCustomPositionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
