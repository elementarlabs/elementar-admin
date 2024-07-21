import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockStateImageComponent } from './block-state-image.component';

describe('BlockStateImageComponent', () => {
  let component: BlockStateImageComponent;
  let fixture: ComponentFixture<BlockStateImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockStateImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockStateImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
