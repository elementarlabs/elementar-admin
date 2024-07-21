import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockStateActionsComponent } from './block-state-actions.component';

describe('BlockStateActionsComponent', () => {
  let component: BlockStateActionsComponent;
  let fixture: ComponentFixture<BlockStateActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockStateActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockStateActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
