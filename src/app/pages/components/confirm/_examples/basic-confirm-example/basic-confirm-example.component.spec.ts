import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicConfirmExampleComponent } from './basic-confirm-example.component';

describe('BasicConfirmExampleComponent', () => {
  let component: BasicConfirmExampleComponent;
  let fixture: ComponentFixture<BasicConfirmExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicConfirmExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicConfirmExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
