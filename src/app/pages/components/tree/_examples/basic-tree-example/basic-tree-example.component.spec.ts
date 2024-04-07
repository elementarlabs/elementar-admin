import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTreeExampleComponent } from './basic-tree-example.component';

describe('BasicTreeExampleComponent', () => {
  let component: BasicTreeExampleComponent;
  let fixture: ComponentFixture<BasicTreeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicTreeExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicTreeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
