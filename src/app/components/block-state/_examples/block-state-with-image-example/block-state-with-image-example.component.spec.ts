import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockStateWithImageExampleComponent } from './block-state-with-image-example.component';

describe('BlockStateWithImageExampleComponent', () => {
  let component: BlockStateWithImageExampleComponent;
  let fixture: ComponentFixture<BlockStateWithImageExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockStateWithImageExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockStateWithImageExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
