import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarGoToPremiumExampleComponent } from './sidebar-go-to-premium-example.component';

describe('SidebarGoToPremiumExampleComponent', () => {
  let component: SidebarGoToPremiumExampleComponent;
  let fixture: ComponentFixture<SidebarGoToPremiumExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarGoToPremiumExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarGoToPremiumExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
