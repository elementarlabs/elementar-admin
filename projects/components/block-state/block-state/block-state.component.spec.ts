import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockStateComponent } from './block-state.component';

describe('BlockStateComponent', () => {
  let component: BlockStateComponent;
  let fixture: ComponentFixture<BlockStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockStateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
