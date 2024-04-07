import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsWithHeadersOnTheBottomExampleComponent } from './tabs-with-headers-on-the-bottom-example.component';

describe('TabsWithHeadersOnTheBottomExampleComponent', () => {
  let component: TabsWithHeadersOnTheBottomExampleComponent;
  let fixture: ComponentFixture<TabsWithHeadersOnTheBottomExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsWithHeadersOnTheBottomExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabsWithHeadersOnTheBottomExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
