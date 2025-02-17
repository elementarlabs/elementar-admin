import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFilterBuilderExampleComponent } from './basic-filter-builder-example.component';

describe('BasicFilterBuilderExampleComponent', () => {
  let component: BasicFilterBuilderExampleComponent;
  let fixture: ComponentFixture<BasicFilterBuilderExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicFilterBuilderExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicFilterBuilderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
