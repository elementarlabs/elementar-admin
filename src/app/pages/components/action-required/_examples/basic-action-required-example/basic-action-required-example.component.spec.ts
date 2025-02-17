import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicActionRequiredExampleComponent } from './basic-action-required-example.component';

describe('BasicActionRequiredExampleComponent', () => {
  let component: BasicActionRequiredExampleComponent;
  let fixture: ComponentFixture<BasicActionRequiredExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicActionRequiredExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicActionRequiredExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
