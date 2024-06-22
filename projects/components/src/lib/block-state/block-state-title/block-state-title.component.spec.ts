import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockStateTitleComponent } from './block-state-title.component';

describe('BlockStateTitleComponent', () => {
  let component: BlockStateTitleComponent;
  let fixture: ComponentFixture<BlockStateTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockStateTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockStateTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
