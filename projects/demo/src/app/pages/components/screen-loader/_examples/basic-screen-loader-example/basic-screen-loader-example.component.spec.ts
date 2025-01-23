import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicScreenLoaderExampleComponent } from './basic-screen-loader-example.component';

describe('BasicScreenLoaderExampleComponent', () => {
  let component: BasicScreenLoaderExampleComponent;
  let fixture: ComponentFixture<BasicScreenLoaderExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicScreenLoaderExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicScreenLoaderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
