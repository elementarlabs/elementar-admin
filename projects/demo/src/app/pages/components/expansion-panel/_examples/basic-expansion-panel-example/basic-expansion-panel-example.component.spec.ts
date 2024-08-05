import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicExpansionPanelExampleComponent } from './basic-expansion-panel-example.component';

describe('BasicExpansionPanelExampleComponent', () => {
  let component: BasicExpansionPanelExampleComponent;
  let fixture: ComponentFixture<BasicExpansionPanelExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicExpansionPanelExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicExpansionPanelExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
