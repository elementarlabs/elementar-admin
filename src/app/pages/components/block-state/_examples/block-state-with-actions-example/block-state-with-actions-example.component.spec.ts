import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockStateWithActionsExampleComponent } from './block-state-with-actions-example.component';

describe('BlockStateWithActionsExampleComponent', () => {
  let component: BlockStateWithActionsExampleComponent;
  let fixture: ComponentFixture<BlockStateWithActionsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockStateWithActionsExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockStateWithActionsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
