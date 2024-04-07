import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefixesAndSuffixesExampleComponent } from './prefixes-and-suffixes-example.component';

describe('PrefixesAndSuffixesExampleComponent', () => {
  let component: PrefixesAndSuffixesExampleComponent;
  let fixture: ComponentFixture<PrefixesAndSuffixesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrefixesAndSuffixesExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrefixesAndSuffixesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
