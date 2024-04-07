import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicProgressBarExampleComponent } from './basic-progress-bar-example.component';

describe('BasicProgressBarExampleComponent', () => {
  let component: BasicProgressBarExampleComponent;
  let fixture: ComponentFixture<BasicProgressBarExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicProgressBarExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicProgressBarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
