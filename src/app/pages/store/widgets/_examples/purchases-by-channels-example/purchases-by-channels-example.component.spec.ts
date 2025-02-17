import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesByChannelsExampleComponent } from './purchases-by-channels-example.component';

describe('PurchasesByChannelsExampleComponent', () => {
  let component: PurchasesByChannelsExampleComponent;
  let fixture: ComponentFixture<PurchasesByChannelsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchasesByChannelsExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasesByChannelsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
