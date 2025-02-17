import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSelectExampleComponent } from './basic-select-example.component';

describe('BasicSelectExampleComponent', () => {
  let component: BasicSelectExampleComponent;
  let fixture: ComponentFixture<BasicSelectExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicSelectExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicSelectExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
