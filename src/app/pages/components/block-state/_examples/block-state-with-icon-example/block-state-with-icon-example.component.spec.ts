import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockStateWithIconExampleComponent } from './block-state-with-icon-example.component';

describe('BlockStateWithIconExampleComponent', () => {
  let component: BlockStateWithIconExampleComponent;
  let fixture: ComponentFixture<BlockStateWithIconExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockStateWithIconExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockStateWithIconExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
