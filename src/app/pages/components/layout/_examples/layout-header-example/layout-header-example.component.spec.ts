import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutHeaderExampleComponent } from './layout-header-example.component';

describe('LayoutHeaderExampleComponent', () => {
  let component: LayoutHeaderExampleComponent;
  let fixture: ComponentFixture<LayoutHeaderExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutHeaderExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutHeaderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
