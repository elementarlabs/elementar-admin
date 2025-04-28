import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortableTabsExampleComponent } from './sortable-tabs-example.component';

describe('SortableTabsExampleComponent', () => {
  let component: SortableTabsExampleComponent;
  let fixture: ComponentFixture<SortableTabsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortableTabsExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortableTabsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
