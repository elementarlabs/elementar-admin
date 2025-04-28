import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTabsExampleComponent } from './basic-tabs-example.component';

describe('BasicTabsExampleComponent', () => {
  let component: BasicTabsExampleComponent;
  let fixture: ComponentFixture<BasicTabsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicTabsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicTabsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
