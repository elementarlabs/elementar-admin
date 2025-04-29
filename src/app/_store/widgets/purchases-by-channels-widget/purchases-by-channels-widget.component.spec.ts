import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesByChannelsWidgetComponent } from './purchases-by-channels-widget.component';

describe('PurchasesByChannelsWidgetComponent', () => {
  let component: PurchasesByChannelsWidgetComponent;
  let fixture: ComponentFixture<PurchasesByChannelsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchasesByChannelsWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PurchasesByChannelsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
