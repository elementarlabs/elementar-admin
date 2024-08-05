import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCarouselExampleComponent } from './basic-carousel-example.component';

describe('BasicCarouselExampleComponent', () => {
  let component: BasicCarouselExampleComponent;
  let fixture: ComponentFixture<BasicCarouselExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicCarouselExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicCarouselExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
