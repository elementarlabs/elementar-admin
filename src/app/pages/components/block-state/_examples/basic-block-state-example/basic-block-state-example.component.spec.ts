import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicBlockStateExampleComponent } from './basic-block-state-example.component';

describe('BasicBlockStateExampleComponent', () => {
  let component: BasicBlockStateExampleComponent;
  let fixture: ComponentFixture<BasicBlockStateExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicBlockStateExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicBlockStateExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
