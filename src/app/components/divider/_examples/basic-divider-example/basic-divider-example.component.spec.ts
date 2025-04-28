import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDividerExampleComponent } from './basic-divider-example.component';

describe('BasicDividerExampleComponent', () => {
  let component: BasicDividerExampleComponent;
  let fixture: ComponentFixture<BasicDividerExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicDividerExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicDividerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
