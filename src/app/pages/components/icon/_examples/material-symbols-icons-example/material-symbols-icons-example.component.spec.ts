import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSymbolsIconsExampleComponent } from './material-symbols-icons-example.component';

describe('MaterialSymbolsIconsExampleComponent', () => {
  let component: MaterialSymbolsIconsExampleComponent;
  let fixture: ComponentFixture<MaterialSymbolsIconsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialSymbolsIconsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialSymbolsIconsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
