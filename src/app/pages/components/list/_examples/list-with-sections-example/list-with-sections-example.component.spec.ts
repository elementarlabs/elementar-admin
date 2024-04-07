import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithSectionsExampleComponent } from './list-with-sections-example.component';

describe('ListWithSectionsExampleComponent', () => {
  let component: ListWithSectionsExampleComponent;
  let fixture: ComponentFixture<ListWithSectionsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListWithSectionsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListWithSectionsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
