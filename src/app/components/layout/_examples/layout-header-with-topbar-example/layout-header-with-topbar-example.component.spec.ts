import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutHeaderWithTopbarExampleComponent } from './layout-header-with-topbar-example.component';

describe('LayoutHeaderWithTopbarExampleComponent', () => {
  let component: LayoutHeaderWithTopbarExampleComponent;
  let fixture: ComponentFixture<LayoutHeaderWithTopbarExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutHeaderWithTopbarExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutHeaderWithTopbarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
