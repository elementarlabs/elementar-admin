import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPaginatorExampleComponent } from './basic-paginator-example.component';

describe('BasicPaginatorExampleComponent', () => {
  let component: BasicPaginatorExampleComponent;
  let fixture: ComponentFixture<BasicPaginatorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicPaginatorExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicPaginatorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
