import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFadeCustomWidthExampleComponent } from './content-fade-custom-width-example.component';

describe('ContentFadeCustomWidthExampleComponent', () => {
  let component: ContentFadeCustomWidthExampleComponent;
  let fixture: ComponentFixture<ContentFadeCustomWidthExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentFadeCustomWidthExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentFadeCustomWidthExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
