import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicResizableContainerExampleComponent } from './basic-resizable-container-example.component';

describe('BasicResizableContainerExampleComponent', () => {
  let component: BasicResizableContainerExampleComponent;
  let fixture: ComponentFixture<BasicResizableContainerExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicResizableContainerExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicResizableContainerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
