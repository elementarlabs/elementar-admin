import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockStateWithCustomIconExampleComponent } from './block-state-with-custom-icon-example.component';

describe('BlockStateWithCustomIconExampleComponent', () => {
  let component: BlockStateWithCustomIconExampleComponent;
  let fixture: ComponentFixture<BlockStateWithCustomIconExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockStateWithCustomIconExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockStateWithCustomIconExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
