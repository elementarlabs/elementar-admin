import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPanelExampleComponent } from './basic-panel-example.component';

describe('BasicPanelExampleComponent', () => {
  let component: BasicPanelExampleComponent;
  let fixture: ComponentFixture<BasicPanelExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicPanelExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicPanelExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
