import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLoadingBarComponent } from './page-loading-bar.component';

describe('PageLoadingBarComponent', () => {
  let component: PageLoadingBarComponent;
  let fixture: ComponentFixture<PageLoadingBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageLoadingBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageLoadingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
