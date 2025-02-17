import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatedTabsExampleComponent } from './paginated-tabs-example.component';

describe('PaginatedTabsExampleComponent', () => {
  let component: PaginatedTabsExampleComponent;
  let fixture: ComponentFixture<PaginatedTabsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginatedTabsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginatedTabsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
