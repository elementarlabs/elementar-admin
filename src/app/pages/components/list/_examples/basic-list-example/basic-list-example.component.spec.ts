import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicListExampleComponent } from './basic-list-example.component';

describe('BasicListExampleComponent', () => {
  let component: BasicListExampleComponent;
  let fixture: ComponentFixture<BasicListExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicListExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicListExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
