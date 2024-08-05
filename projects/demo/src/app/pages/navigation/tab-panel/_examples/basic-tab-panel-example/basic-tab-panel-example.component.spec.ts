import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTabPanelExampleComponent } from './basic-tab-panel-example.component';

describe('BasicTabPanelExampleComponent', () => {
  let component: BasicTabPanelExampleComponent;
  let fixture: ComponentFixture<BasicTabPanelExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicTabPanelExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicTabPanelExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
