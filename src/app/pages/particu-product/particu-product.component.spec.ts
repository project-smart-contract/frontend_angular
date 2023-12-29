import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticuProductComponent } from './particu-product.component';

describe('ParticuProductComponent', () => {
  let component: ParticuProductComponent;
  let fixture: ComponentFixture<ParticuProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticuProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParticuProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
