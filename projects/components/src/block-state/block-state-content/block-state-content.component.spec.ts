import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockStateContentComponent } from './block-state-content.component';

describe('BlockStateContentComponent', () => {
  let component: BlockStateContentComponent;
  let fixture: ComponentFixture<BlockStateContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockStateContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockStateContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
