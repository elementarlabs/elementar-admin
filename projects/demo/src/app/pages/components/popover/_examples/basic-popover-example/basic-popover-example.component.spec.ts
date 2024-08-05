import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPopoverExampleComponent } from './basic-popover-example.component';

describe('BasicPopoverExampleComponent', () => {
  let component: BasicPopoverExampleComponent;
  let fixture: ComponentFixture<BasicPopoverExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicPopoverExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicPopoverExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
