import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicToolbarExampleComponent } from './basic-toolbar-example.component';

describe('BasicToolbarExampleComponent', () => {
  let component: BasicToolbarExampleComponent;
  let fixture: ComponentFixture<BasicToolbarExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicToolbarExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicToolbarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
