import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAsideExampleComponent } from './layout-aside-example.component';

describe('LayoutAsideExampleComponent', () => {
  let component: LayoutAsideExampleComponent;
  let fixture: ComponentFixture<LayoutAsideExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutAsideExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutAsideExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
