import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepProductComponent } from './entrep-product.component';

describe('EntrepProductComponent', () => {
  let component: EntrepProductComponent;
  let fixture: ComponentFixture<EntrepProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrepProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntrepProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
