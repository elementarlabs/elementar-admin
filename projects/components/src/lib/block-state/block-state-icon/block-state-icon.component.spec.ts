import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockStateIconComponent } from './block-state-icon.component';

describe('BlockStateIconComponent', () => {
  let component: BlockStateIconComponent;
  let fixture: ComponentFixture<BlockStateIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockStateIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockStateIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
