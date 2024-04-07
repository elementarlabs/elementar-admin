import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsWithAlignedLabelsExampleComponent } from './tabs-with-aligned-labels-example.component';

describe('TabsWithAlignedLabelsExampleComponent', () => {
  let component: TabsWithAlignedLabelsExampleComponent;
  let fixture: ComponentFixture<TabsWithAlignedLabelsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsWithAlignedLabelsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabsWithAlignedLabelsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
