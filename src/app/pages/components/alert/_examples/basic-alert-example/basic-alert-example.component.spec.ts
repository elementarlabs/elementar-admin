import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAlertExampleComponent } from './basic-alert-example.component';

describe('BasicAlertExampleComponent', () => {
  let component: BasicAlertExampleComponent;
  let fixture: ComponentFixture<BasicAlertExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicAlertExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicAlertExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
